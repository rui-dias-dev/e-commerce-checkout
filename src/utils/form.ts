import * as z from "zod";

export const formSchema = z.object({
    zipCode: z
        .string()
        .min(1, "É necessário o Código Postal")
        .regex(RegExp("^\\d{4}-\\d{3}$"), "padrão 1234-123"),
    address: z.string().min(1, "É necessário a Rua"),
    location: z.string().optional(),
    number: z.string().min(1, "É necessário o número da sua residência"),
    city: z.string().min(1, "É necessário a Cidade"),
    paymentMethod: z.enum(["credit-card", "debit-card", "fiat"], {
        required_error: "É necessário selecionar método de pagamento.",
    }),
});
