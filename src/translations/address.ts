import { PaymentMethodType } from "../@types/address";

export const paymentMethodTranslations: Record<PaymentMethodType, string> = {
    [PaymentMethodType.CreditCard]: "Cartão de crédito",
    [PaymentMethodType.DebitCard]: "Cartão de débito",
    [PaymentMethodType.Cash]: "Dinheiro",
};
