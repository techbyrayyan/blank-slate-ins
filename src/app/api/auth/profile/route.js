import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import User from "@/models/User";

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const email = searchParams.get("email");

    let user = null;
    if (id) {
      user = await User.findById(id);
    } else if (email) {
      user = await User.findOne({ email: email.trim().toLowerCase() });
    }

    if (!user) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
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
    console.error("[/api/auth/profile GET] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch profile." },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id, firstName, lastName, email, phone } = body;

    if (!id && !email) {
      return NextResponse.json(
        { success: false, error: "User ID or Email is required." },
        { status: 400 }
      );
    }

    const filter = id ? { _id: id } : { email: email.trim().toLowerCase() };
    const updates = {};
    if (firstName) updates.firstName = firstName.trim();
    if (lastName) updates.lastName = lastName.trim();
    if (email) updates.email = email.trim().toLowerCase();
    if (phone) updates.phone = phone.trim();

    const updatedUser = await User.findOneAndUpdate(
      filter,
      { $set: updates },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json(
        { success: false, error: "User not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Profile updated successfully!",
      user: {
        id: updatedUser._id,
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        phone: updatedUser.phone,
        avatar: updatedUser.avatar || "",
      },
    });
  } catch (err) {
    console.error("[/api/auth/profile POST] Error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Failed to update profile." },
      { status: 500 }
    );
  }
}
