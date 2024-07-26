import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, abbreviation } = await request.json();
    const units = { title, abbreviation };
    console.log(units);
    return NextResponse.json(units);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a unit",
      },
      { status: 500 }
    );
  }
}
