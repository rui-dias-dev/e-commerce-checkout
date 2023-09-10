import { UseFormReturn } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/Form";
import { RadioGroup, RadioGroupItem } from "../ui/RadioGroup";

import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentMethodType } from "../../@types/address";
import { paymentMethodTranslations } from "../../translations/address";

import { AddressType } from "./CheckoutForm";
interface AddressFieldsProps {
    form: UseFormReturn<AddressType>;
}

export const PaymentMethodField = ({ form }: AddressFieldsProps) => {
    return (
        <footer className="mt-3 rounded-md bg-base-card p-10">
            <header className="flex items-start gap-2">
                <CurrencyDollar className=" h-6 w-6 text-purple-dark" />
                <div className="flex flex-col items-start">
                    <p className="text-base-subtitle">Pagamento</p>
                    <p className="text-sm text-base-text">
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                    </p>
                </div>
            </header>

            <FormField
                control={form.control}
                name="paymentMethod"
                render={({ field }) => (
                    <>
                        <FormControl className="mt-8">
                            <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-wrap gap-3"
                            >
                                {/* Credit Card */}
                                <FormItem className="relative flex items-center">
                                    <FormControl className="absolute opacity-0">
                                        <RadioGroupItem
                                            value={PaymentMethodType.CreditCard}
                                        />
                                    </FormControl>
                                    <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                        <CreditCard className="h-4 w-4 text-purple" />
                                        {
                                            paymentMethodTranslations[
                                                PaymentMethodType.CreditCard
                                            ]
                                        }
                                    </FormLabel>
                                </FormItem>

                                {/* Debit Card */}
                                <FormItem className="relative flex items-center">
                                    <FormControl className="absolute opacity-0">
                                        <RadioGroupItem
                                            value={PaymentMethodType.DebitCard}
                                        />
                                    </FormControl>
                                    <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                        <Bank className="h-4 w-4 text-purple" />
                                        {
                                            paymentMethodTranslations[
                                                PaymentMethodType.DebitCard
                                            ]
                                        }
                                    </FormLabel>
                                </FormItem>

                                {/* Cash */}
                                <FormItem className="relative flex items-center">
                                    <FormControl className="absolute opacity-0">
                                        <RadioGroupItem
                                            value={PaymentMethodType.Cash}
                                        />
                                    </FormControl>
                                    <FormLabel className="flex cursor-pointer gap-3 rounded-md border bg-base-button p-4 text-xs font-normal uppercase text-base-text [input:checked+&]:border-purple [input:checked+&]:bg-purple-light">
                                        <Money className="h-4 w-4 text-purple" />
                                        {
                                            paymentMethodTranslations[
                                                PaymentMethodType.Cash
                                            ]
                                        }
                                    </FormLabel>
                                </FormItem>
                            </RadioGroup>
                        </FormControl>
                        <FormMessage />
                    </>
                )}
            />
        </footer>
    );
};
