import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { authTables } from "@convex-dev/auth/server"

export default defineSchema({
  ...authTables,
  
  enrollments: defineTable({
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
    submittedAt: v.number(),
  }).index("by_email", ["email"]),

  inquiries: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    inquiryType: v.optional(v.string()),
    message: v.string(),
    submittedAt: v.number(),
  }).index("by_email", ["email"]),
})
