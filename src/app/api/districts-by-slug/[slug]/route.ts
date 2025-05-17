import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/mongodb"; // adjust path if needed

export async function GET(request: NextRequest, context: any) {
  const { slug } = context.params;

  try {
    const { db } = await connectToDatabase();
    const district = await db.collection("districts").findOne({ slug });

    if (!district) {
      return NextResponse.json({ message: "District not found" }, { status: 404 });
    }

    return NextResponse.json(district);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
