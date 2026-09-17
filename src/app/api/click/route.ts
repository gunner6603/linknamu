import { NextRequest, NextResponse } from "next/server";
import { getMongoClientPromise } from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await getMongoClientPromise();
    const db = client.db("linknamu");
    const docs = await db
      .collection("linkClicks")
      .find({}, { projection: { linkId: 1, count: 1 } })
      .toArray();

    const counts: Record<string, number> = {};
    for (const doc of docs) {
      counts[doc.linkId] = doc.count;
    }

    return NextResponse.json({ counts });
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ counts: {} }, { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  const { linkId } = await request.json();

  if (!linkId || typeof linkId !== "string") {
    return NextResponse.json({ error: "linkId가 필요합니다." }, { status: 400 });
  }

  try {
    const client = await getMongoClientPromise();
    const db = client.db("linknamu");
    await db
      .collection("linkClicks")
      .updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("클릭 수 기록 실패:", error);
    return NextResponse.json({ ok: false }, { status: 200 });
  }
}
