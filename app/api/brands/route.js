import db from "@/lib/db";
import { message } from "antd";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, logo } = await request.json();
    const brand = await db.brand.create({
      data: {
        name,
        logo,
      },
    });
    console.log(brand);
    return NextResponse.json(brand);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create a brand",
      },
      { status: 500 }
    );
  }
}
