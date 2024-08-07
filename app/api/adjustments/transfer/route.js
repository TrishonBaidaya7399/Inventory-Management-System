import db from "@/lib/db";
import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { stockAmount, senderWarehouse, receiverWarehouse, note } = await request.json();
    const transferStock = await db.transferStock.create({
      data: { stockAmount, senderWarehouse, receiverWarehouse, note }});
    console.log(transferStock);
    return NextResponse.json(transferStock);
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
