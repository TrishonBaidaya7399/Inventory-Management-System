import db from "@/lib/db";
import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    const category = await db.category.create({ data: { title, description } });
    console.log(category);
    return NextResponse.json(category);
  } catch (error) {
    console.error(error.message);
    message.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a category",
      },
      { status: 500 }
    );
  }
}
