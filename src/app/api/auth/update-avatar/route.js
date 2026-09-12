import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { email, avatar } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await User.findOneAndUpdate(
      { email: normalizedEmail },
      { $set: { avatar: avatar || "" } },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Avatar updated successfully!",
      avatar: user.avatar || "",
    });
  } catch (err) {
    console.error("[/api/auth/update-avatar] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update avatar." },
      { status: 500 }
    );
  }
}
