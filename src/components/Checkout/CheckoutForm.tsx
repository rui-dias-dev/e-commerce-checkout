import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "../ui/Form";

import { formSchema } from "../../utils/form";

import { AddressFields } from "./AddressFields";
import { PaymentMethodField } from "./PaymentMethodField";
import { Summary } from "./Summary";

export interface FormData {
    zipCode: string;
    address: string;
    location?: string;
    number: string;
    city: string;
    paymentMethod: "credit-card" | "debit-card" | "fiat";
}

export function CheckoutForm() {
    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            zipCode: "",
            address: "",
            city: "",
            location: "",
            number: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="m-auto max-w-6xl gap-8 p-8 lg:flex"
            >
                <section className="w-full max-w-1.5xl">
                    <h2 className="text-lg">Complete seu pedido</h2>
                    <AddressFields form={form} />
                    <PaymentMethodField form={form} />
                </section>

                <section className="flex-1">
                    <h2 className="text-lg">Cafés selecionados</h2>
                    <Summary />
                </section>
            </form>
        </Form>
    );
}
