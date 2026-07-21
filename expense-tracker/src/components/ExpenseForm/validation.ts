import { z } from "zod";

export const expenseSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, "Title must be at least 3 characters"),

  amount: z
    .number({
      error: "Amount is required",
    })
    .positive("Amount must be greater than 0"),

  category: z
    .string()
    .min(1, "Please select a category"),

  date: z
    .string()
    .min(1, "Please select a date"),
});

export type ExpenseFormData = z.infer<typeof expenseSchema>;