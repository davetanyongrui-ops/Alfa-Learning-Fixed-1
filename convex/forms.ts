import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";

export const submitEnrollment = mutation({
  args: {
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
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("enrollments", {
      studentName: args.studentName,
      parentName: args.parentName,
      email: args.email,
      phone: args.phone,
      age: args.age,
      currentLevel: args.currentLevel,
      interestedSubjects: args.interestedSubjects,
      preferredSchedule: args.preferredSchedule,
      goals: args.goals,
      message: args.message,
      submittedAt: Date.now(),
    });

    // Schedule email sending
    await ctx.scheduler.runAfter(0, internal.formsActions.sendEnrollmentEmail, {
      enrollment: {
        enrollmentId: id,
        ...args,
      },
    });

    return id;
  },
});

export const submitInquiry = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    inquiryType: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("inquiries", {
      name: args.name,
      email: args.email,
      phone: args.phone,
      inquiryType: args.inquiryType,
      message: args.message,
      submittedAt: Date.now(),
    });

    // Schedule email sending
    await ctx.scheduler.runAfter(0, internal.formsActions.sendInquiryEmail, {
      inquiry: {
        inquiryId: id,
        ...args,
      },
    });

    return id;
  },
});