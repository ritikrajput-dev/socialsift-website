import { NextRequest, NextResponse } from "next/server";

const FORM_ENDPOINT_URL = process.env.FORM_ENDPOINT_URL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { fullName, businessEmail, servicesInterested } = body;

    if (!fullName || !businessEmail) {
      return NextResponse.json(
        {
          success: false,
          error: "Full name and business email are required.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        {
          success: false,
          error: "Please provide a valid email address.",
        },
        { status: 400 }
      );
    }

    if (!FORM_ENDPOINT_URL) {
      return NextResponse.json(
        {
          success: false,
          error: "Form endpoint is not configured yet.",
        },
        { status: 503 }
      );
    }

    const payload = {
      ...body,
      servicesInterested: Array.isArray(servicesInterested)
        ? servicesInterested.join(", ")
        : servicesInterested || "",
      submittedAt: new Date().toISOString(),
      source: "SocialSift Growth Audit",
    };

    const response = await fetch(FORM_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          error: "Could not submit the form. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        "Thanks! Your request has been received. We'll review your information and contact you shortly.",
    });
  } catch (error) {
    console.error("Growth audit submission error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}
