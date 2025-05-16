import { NextResponse } from "next/server";
import { connectToDatabase} from "../../../../lib/mongodb";

export async function GET() {
  const { db } = await connectToDatabase();
  const districts = await db.collection("districts").find().toArray();
  return NextResponse.json(districts);
}
