import { z } from "zod/v4"
import { postalCodePatterns } from "./patterns";

export const addressSchema = z.object({
    country: z.enum(["DE", "AT", "FR", "GB", "DK", "NL"]),
    street: z.string().min(1).max(100),
    houseNumber: z.string().min(1).max(10),
    postalCode: z.string().min(1),
}).superRefine((address, ctx) => {
    const pattern = postalCodePatterns[address.country];
    if (pattern && !pattern.test(address.postalCode)) {
    ctx.addIssue({
        code: "custom",
        input: address.postalCode,
        path: ["postalCode"],
        message: `Invalid pattern. ${postalCodePatterns[address.country]} required`
    });
  }
});
export type AddressFormValues = z.infer<typeof addressSchema>;