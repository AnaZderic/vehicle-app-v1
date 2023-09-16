import fs from "fs";
import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const img: string | null = data.get("img") as unknown as string;
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const folder = `${process.cwd() + img.substring(0, img.lastIndexOf("/"))}`;
  const path = `${process.cwd() + img}`;
  
  try {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder);
    }
  } catch (err) {
    console.error(err);
  }

  await writeFile(path, buffer);

  return NextResponse.json({ success: true });
}