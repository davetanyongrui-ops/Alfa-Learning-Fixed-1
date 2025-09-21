"use node";

import { internalAction } from "./_generated/server";
import { v } from "convex/values";

const adminEmailFromEnv = process.env.ADMIN_EMAIL || "Alfanugerah.yongrui@gmail.com";

function buildEnrollmentHtml(e: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #2563eb; margin-bottom: 20px; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          🎓 New Student Enrollment - ALFA LEARNING
        </h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Student Name:</strong> 
          <span style="color: #1f2937;">${e.studentName}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Parent/Guardian:</strong> 
          <span style="color: #1f2937;">${e.parentName || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Email:</strong> 
          <span style="color: #1f2937;">${e.email}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Phone:</strong> 
          <span style="color: #1f2937;">${e.phone || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Age:</strong> 
          <span style="color: #1f2937;">${e.age || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Current Level:</strong> 
          <span style="color: #1f2937;">${e.currentLevel || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Interested Subjects:</strong> 
          <span style="color: #1f2937;">${e.interestedSubjects || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Preferred Schedule:</strong> 
          <span style="color: #1f2937;">${e.preferredSchedule || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Learning Goals:</strong> 
          <div style="color: #1f2937; margin-top: 5px; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
            ${e.goals || "—"}
          </div>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Additional Information:</strong> 
          <div style="color: #1f2937; margin-top: 5px; padding: 10px; background-color: #f3f4f6; border-radius: 5px;">
            ${e.message || "—"}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
          <p>Enrollment ID: ${e.enrollmentId}</p>
          <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;
}

function buildInquiryHtml(i: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #7c3aed; margin-bottom: 20px; border-bottom: 2px solid #7c3aed; padding-bottom: 10px;">
          💬 New General Inquiry - ALFA LEARNING
        </h2>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Name:</strong> 
          <span style="color: #1f2937;">${i.name}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Email:</strong> 
          <span style="color: #1f2937;">${i.email}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Phone:</strong> 
          <span style="color: #1f2937;">${i.phone || "—"}</span>
        </div>
        
        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">Inquiry Type:</strong> 
          <span style="color: #1f2937;">${i.inquiryType || "General"}</span>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Message:</strong>
          <div style="color: #1f2937; margin-top: 5px; padding: 15px; background-color: #f3f4f6; border-radius: 5px; line-height: 1.6;">
            ${i.message}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280;">
          <p>Inquiry ID: ${i.inquiryId}</p>
          <p>Submitted: ${new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  `;
}

async function sendWithSendGrid(
  to: string,
  from: string,
  subject: string,
  htmlBody: string
) {
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error("SENDGRID_API_KEY not set in environment (Macaly Settings → Secrets).");
  
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: from },
      subject,
      content: [{ type: "text/html", value: htmlBody }],
    }),
  });
  
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`SendGrid error: ${res.status} ${text}`);
  }
}

export const sendEnrollmentEmail = internalAction({
  args: {
    enrollment: v.object({
      enrollmentId: v.id("enrollments"),
      studentName: v.string(),
      parentName: v.optional(v.string()),
      email: v.string(),
      phone: v.optional(v.string()),
      age: v.optional(v.string()),
      currentLevel: v.optional(v.string()),
      interestedSubjects: v.optional(v.string()),
      preferredSchedule: v.optional(v.string()),
      goals: v.optional(v.string()),
      message: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const from = process.env.EMAIL_FROM;
    const to = process.env.ADMIN_EMAIL || adminEmailFromEnv;
    if (!from) throw new Error("EMAIL_FROM not set in environment (Macaly Settings → Secrets).");

    const html = buildEnrollmentHtml(args.enrollment);
    await sendWithSendGrid(to, from, `ALFA LEARNING - New Enrollment: ${args.enrollment.studentName}`, html);
    return null;
  },
});

export const sendInquiryEmail = internalAction({
  args: {
    inquiry: v.object({
      inquiryId: v.id("inquiries"),
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
      inquiryType: v.optional(v.string()),
      message: v.string(),
    }),
  },
  handler: async (ctx, args) => {
    const from = process.env.EMAIL_FROM;
    const to = process.env.ADMIN_EMAIL || adminEmailFromEnv;
    if (!from) throw new Error("EMAIL_FROM not set in environment (Macaly Settings → Secrets).");

    const html = buildInquiryHtml(args.inquiry);
    await sendWithSendGrid(to, from, `ALFA LEARNING - New Inquiry from ${args.inquiry.name}`, html);
    return null;
  },
});