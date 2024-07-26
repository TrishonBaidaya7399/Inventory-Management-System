import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const items = { title, description };
    console.log(items);
    return NextResponse.json(items);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a item",
      },
      { status: 500 }
    );
  }
}
