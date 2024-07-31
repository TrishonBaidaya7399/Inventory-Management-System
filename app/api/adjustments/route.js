import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { stockAmount, branch, note } = await request.json();
    const adjustments = { stockAmount, branch, note };
    console.log(adjustments);
    return NextResponse.json(adjustments);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a adjustments",
      },
      { status: 500 }
    );
  }
}
