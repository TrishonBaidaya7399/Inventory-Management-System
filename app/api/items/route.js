import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      name,
      category,
      sku,
      quantity,
      unit,
      brand,
      unitPrice,
      costPrice,
      supplierId,
      reorderUnit,
      warehouseId,
      barcode,
      dimensions,
      weight,
      description,
      images,
      note,
    } = await request.json();

    const items = await db.item.create({
      data: {
        name,
        category,
        sku,
        quantity,
        unit,
        brand,
        unitPrice,
        costPrice,
        supplierId,
        reorderUnit,
        warehouseId,
        barcode,
        dimensions,
        weight,
        description,
        images,
        note,
      },
    });

    console.log(items);
    return NextResponse.json(items);
  } catch (error) {
    console.error(error.message);
    return NextResponse.json(
      {
        error,
        message: "Failed to create an item",
      },
      { status: 500 }
    );
  }
}
