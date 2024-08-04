import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { stockAmount, warehouse, note } = await request.json();
    const addStock = { stockAmount, warehouse, note };
    console.log(addStock);
    return NextResponse.json(addStock);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to add stock",
      },
      { status: 500 }
    );
  }
}
