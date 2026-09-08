import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import ContactMessage from "@/models/ContactMessage";

/**
 * POST /api/contact
 * Saves a Let's Talk / contact form submission to MongoDB.
 */
export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { name, email, phone, subject, message, source } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const doc = await ContactMessage.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      subject: subject || "General Inquiry",
      message: message.trim(),
      source: source || "contact_page",
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received. We will get back to you within 24 hours.",
        id: doc._id,
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("[/api/contact] Error:", err);
    return NextResponse.json(
      { success: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Returns all contact messages (admin use). Live data, no caching.
 */
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await dbConnect();

    const messages = await ContactMessage.find({})
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ success: true, data: messages });
  } catch (err) {
    console.error("[/api/contact] GET Error:", err);
    return NextResponse.json(
      { success: false, error: "Server error." },
      { status: 500 }
    );
  }
}
