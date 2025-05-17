import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/mongodb";

export async function GET(
  request: NextRequest,
  { params }: { slug: string }
) {
  const { slug } = params;

  const { db } = await connectToDatabase();
  const district = await db.collection("districts").findOne({ slug });

  if (!district) {
    return NextResponse.json({ message: "District not found" }, { status: 404 });
  }

  return NextResponse.json(district);
}