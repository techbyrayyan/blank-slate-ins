import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { verifyPassword } from "@/lib/authCrypto";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { email, password } = body;

    // Validation
    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Please enter your email and password." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Find user
    const user = await User.findOne({ email: normalizedEmail });
    if (!user) {
      return NextResponse.json(
        { success: false, error: "No account found with this email. Please sign up first." },
        { status: 404 }
      );
    }

    // Verify hash
    const isValid = verifyPassword(password, user.salt, user.passwordHash);
    if (!isValid) {
      return NextResponse.json(
        { success: false, error: "Invalid password. Please try again." },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Logged in successfully!",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar || "",
      },
    });
  } catch (err) {
    console.error("[/api/auth/login] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Login failed." },
      { status: 500 }
    );
  }
}
