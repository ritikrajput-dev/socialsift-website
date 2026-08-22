# SocialSift — Free Form Setup

## What changed
The Growth Audit form no longer requires PostgreSQL. It forwards submissions to a free external endpoint.

## Required before going live
Create a Google Apps Script web app that writes submissions to a Google Sheet, then add this Vercel environment variable:

FORM_ENDPOINT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec

The endpoint must accept JSON POST requests.

## Lead flow
Website form -> Next.js API -> Google Apps Script -> Google Sheet

You can then add Gmail notifications from Google Apps Script.

Do not put Google credentials in the frontend.
