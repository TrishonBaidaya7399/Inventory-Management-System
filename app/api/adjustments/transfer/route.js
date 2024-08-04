import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { stockAmount, senderWarehouse, receiverWarehouse, note } = await request.json();
    const transfer = { stockAmount, senderWarehouse, receiverWarehouse, note };
    console.log(transfer);
    return NextResponse.json(transfer);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to transfer stock",
      },
      { status: 500 }
    );
  }
}
