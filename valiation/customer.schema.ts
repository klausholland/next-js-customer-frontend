import { z } from "zod/v4"
import { addressSchema } from "./address.schema"
import { taxIdPatterns } from "./patterns"

export const customerSchema = z.object({
    name: z.string().min(1).max(255),
    surName: z.string().min(1).max(255),
    info: z.string().max(100),
    taxId: z.string().min(1).max(14),
    address: addressSchema
}).superRefine((customer, ctx) => {
    const pattern = taxIdPatterns[customer.address.country];
    if (pattern && !pattern.test(customer.taxId)) {
    ctx.addIssue({
        code: "custom",
        input: customer.taxId,
        path: ["taxId"],
        message: `Invalid pattern. ${taxIdPatterns[customer.address.country]} required`
    });
  }
});
export type CustomerFormValues = z.infer<typeof customerSchema>