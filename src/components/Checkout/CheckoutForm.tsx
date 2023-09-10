import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCart } from "../../context/CartProvider";
import { useAddress } from "../../context/AddressProvider";

import { Form } from "../ui/Form";

import { formSchema } from "../../utils/form";

import { AddressFields } from "./AddressFields";
import { PaymentMethodField } from "./PaymentMethodField";
import { Summary } from "./Summary";

export interface AddressType {
    zipCode: string;
    address: string;
    location?: string;
    number: string;
    city: string;
    paymentMethod: "credit-card" | "debit-card" | "fiat";
}

export function CheckoutForm() {
    const { address, createNewAddress } = useAddress();
    const { cartProducts, resetCart } = useCart();
    const navigate = useNavigate();
    const form = useForm<AddressType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            zipCode: address?.zipCode ?? "",
            address: address?.address ?? "",
            city: address?.city ?? "",
            location: address?.location ?? "",
            number: address?.number ?? "",
            paymentMethod: address?.paymentMethod,
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        createNewAddress(values);

        resetCart();
        if (cartProducts.length) {
            navigate("/success");
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="m-auto flex max-w-6xl flex-col gap-8 p-8 lg:flex-row"
            >
                <section className="w-full lg:max-w-1.5xl">
                    <h2 className="text-lg">Complete seu pedido</h2>
                    <AddressFields form={form} />
                    <PaymentMethodField form={form} />
                </section>

                <section className="flex-1 lg:max-w-1.5xl">
                    <h2 className="text-lg">Cafés selecionados</h2>
                    <Summary />
                </section>
            </form>
        </Form>
    );
}
