import { NextRequest, NextResponse } from "next/server";

// ============================================================
// FREE FORM CONFIGURATION
// ============================================================
// Add this environment variable in Vercel after creating your
// Google Apps Script endpoint:
//
// FORM_ENDPOINT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
//
// The website sends every Growth Audit submission to that endpoint.
// No paid database is required.
// ============================================================

const FORM_ENDPOINT_URL = process.env.FORM_ENDPOINT_URL || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      companyName,
      businessEmail,
      whatsappPhone,
      website,
      industry,
      servicesInterested,
      monthlyBudget,
      monthlyLeads,
      biggestChallenge,
      desiredResult,
      additionalMessage,
    } = body;

    if (!fullName || !businessEmail) {
      return NextResponse.json(
        { success: false, error: "Full name and business email are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(businessEmail)) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!FORM_ENDPOINT_URL) {
      console.error("FORM_ENDPOINT_URL is not configured.");
      return NextResponse.json(
        {
          success: false,
          error: "The form is not connected yet. Please configure FORM_ENDPOINT_URL in Vercel.",
        },
        { status: 503 }
      );
    }

    const externalResponse = await fetch(FORM_ENDPOINT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        servicesInterested: Array.isArray(servicesInterested)
          ? servicesInterested.join(", ")
          : servicesInterested || "",
        submittedAt: new Date().toISOString(),
        source: "SocialSift Growth Audit",
      }),
      cache: "no-store",
    });

    if (!externalResponse.ok) {
      console.error(
        "External form endpoint returned:",
        externalResponse.status
      );
      return NextResponse.json(
        {
          success: false,
          error: "We couldn't submit your request right now. Please try again.",
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
        error:
          "Something went wrong. Please try again or contact us at socialsift.agency@gmail.com",
      },
      { status: 500 }
    );
  }
}
