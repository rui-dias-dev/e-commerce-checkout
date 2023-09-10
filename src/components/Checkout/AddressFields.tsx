import { MapPinLine } from "@phosphor-icons/react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/Form";
import { Input } from "../ui/Input";
import { AddressType } from "./CheckoutForm";
import { UseFormReturn } from "react-hook-form";

interface AddressFieldsProps {
    form: UseFormReturn<AddressType>;
}

export const AddressFields = ({ form }: AddressFieldsProps) => {
    return (
        <div className="mt-4">
            <section className="rounded-md bg-base-card p-10">
                <header className="flex items-start gap-2">
                    <MapPinLine className=" h-6 w-6 text-yellow-dark" />
                    <div className="flex flex-col items-start">
                        <p className="text-base-subtitle">
                            Endereço de Entrega
                        </p>
                        <p className="text-sm text-base-text">
                            Informe o endereço onde deseja receber seu pedido
                        </p>
                    </div>
                </header>
                <div className="mt-4 grid gap-y-4 text-base-text">
                    <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-base-input max-w-[200px]"
                                        placeholder="Código Postal"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage  />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-base-input"
                                        placeholder="Rua"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage  />
                            </FormItem>
                        )}
                    />
                    <div className="flex gap-x-3">
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem className="max-w-[200px]">
                                    <FormControl>
                                        <Input
                                            className="bg-base-input"
                                            placeholder="Número"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage  />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem className="relative flex-1">
                                    <FormControl>
                                        <Input
                                            className="bg-base-input pr-16"
                                            placeholder="Localidade"
                                            {...field}
                                        />
                                    </FormControl>
                                    <span className="absolute right-3 top-5 -translate-y-1/2 text-xs italic text-base-label">
                                        opcional
                                    </span>
                                    <FormMessage  />
                                </FormItem>
                            )}
                        />
                    </div>
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        className="bg-base-input"
                                        placeholder="Cidade"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage  />
                            </FormItem>
                        )}
                    />
                </div>
            </section>
        </div>
    );
};
