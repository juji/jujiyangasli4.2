import { z } from 'zod'

export const contactSchema = z.object({
  name: z.string().min(2, { message: "need 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(5, { message: "need 5 or more characters long" })
})

export type ContactSchema = z.infer<typeof contactSchema>;