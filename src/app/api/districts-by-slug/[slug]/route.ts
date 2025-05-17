import { NextRequest, NextResponse } from "next/server";
import { connectToDatabase } from "../../../../../lib/mongodb"; // ✅ Update to alias if you're using `@` for `src`

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  try {
    const { db } = await connectToDatabase();
    const district = await db.collection("districts").findOne({ slug });

    if (!district) {
      return NextResponse.json(
        { message: "District not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(district);
  } catch (error) {
    console.error("Error fetching district:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
