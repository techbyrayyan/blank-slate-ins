import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";
import { hashPassword } from "@/lib/authCrypto";

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { firstName, lastName, email, phone, password, confirmPassword } = body;

    // Validation
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    if (password !== confirmPassword) {
      return NextResponse.json(
        { success: false, error: "Password and Confirm Password do not match." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { success: false, error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if user already exists
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return NextResponse.json(
        { success: false, error: "An account with this email already exists. Please log in." },
        { status: 409 }
      );
    }

    const { salt, hash } = hashPassword(password);

    const user = await User.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      passwordHash: hash,
      salt: salt,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Account created successfully!",
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
        },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/auth/signup] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to create account." },
      { status: 500 }
    );
  }
}
