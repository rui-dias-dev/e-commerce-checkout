import * as z from "zod";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react";

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormMessage,
} from "../ui/Form";
import { Input } from "../ui/Input";

const formSchema = z.object({
    "codigo-postal": z.string().nonempty("É necessário o Código Postal"),
    rua: z.string().nonempty("É necessário a Rua"),
});

export const CheckoutForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            "codigo-postal": "",
            rua: "",
        },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="m-auto flex max-w-6xl gap-8 p-8"
            >
                <section>
                    <h2 className="text-lg">Complete seu pedido</h2>
                    <div className="mt-4">
                        <section className="rounded-md bg-base-card p-10">
                            <header className="flex items-start gap-2">
                                <MapPinLine className=" h-6 w-6 text-yellow-dark" />
                                <div className="flex flex-col items-start">
                                    <p className="text-base-subtitle">
                                        Endereço de Entrega
                                    </p>
                                    <p className="text-sm text-base-text">
                                        Informe o endereço onde deseja receber
                                        seu pedido
                                    </p>
                                </div>
                            </header>
                            <main>
                                <FormField
                                    control={form.control}
                                    name="codigo-postal"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Código Postal"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="rua"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input
                                                    placeholder="Rua"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage className="text-red-600" />
                                        </FormItem>
                                    )}
                                />
                                <button type="submit">Submit</button>
                            </main>
                        </section>
                    </div>

                    <footer className="mt-3 rounded-md bg-base-card p-10">
                        <header className="flex items-start gap-2">
                            <CurrencyDollar className=" h-6 w-6 text-purple-dark" />
                            <div className="flex flex-col items-start">
                                <p className="text-base-subtitle">Pagamento</p>
                                <p className="text-sm text-base-text">
                                    O pagamento é feito na entrega. Escolha a
                                    forma que deseja pagar
                                </p>
                            </div>
                        </header>
                    </footer>
                </section>

                <section>
                    <h2 className="text-lg">Cafés selecionados</h2>
                    <div className="mt-4 rounded-bl-4xl rounded-br-md rounded-tl-md rounded-tr-4xl bg-base-card p-10"></div>
                </section>
            </form>
        </Form>
    );
};
