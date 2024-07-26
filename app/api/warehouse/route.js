import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    const warehouse = { title, abbreviation };
    console.log(warehouse);
    return NextResponse.json(warehouse);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a warehouse",
      },
      { status: 500 }
    );
  }
}
