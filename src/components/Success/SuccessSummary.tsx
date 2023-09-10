import { useAddress } from "../../context/AddressProvider";
import { paymentMethodTranslations } from "../../translations/address";

import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";

export const SuccessSummary = () => {
    const { address } = useAddress();
    return (
        <div className="flex-1 rounded-md rounded-bl-4xl rounded-tr-4xl bg-gradient-to-r from-yellow via-yellow-dark to-purple p-px ">
            <div className="flex h-full w-full flex-col gap-8 rounded-md rounded-bl-4xl rounded-tr-4xl bg-white p-10">
                <div className="flex items-start gap-3">
                    <div className="rounded-full bg-purple p-2">
                        <MapPin
                            width={16}
                            height={16}
                            weight="fill"
                            className="text-white"
                        />
                    </div>
                    <div>
                        <p>
                            Entrega em{" "}
                            <strong>
                                {address?.address}, {address?.number}
                            </strong>
                        </p>
                        <p>
                            {address?.location
                                ? `${address?.location}, ${address.city}`
                                : address?.city}
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="rounded-full bg-yellow p-2">
                        <Timer
                            width={16}
                            height={16}
                            weight="fill"
                            className="text-white"
                        />
                    </div>
                    <div>
                        <p>Previsão de entrega</p>
                        <p>
                            <strong>20 min - 30 min</strong>
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-3">
                    <div className="rounded-full bg-yellow-dark p-2">
                        <CurrencyDollar
                            width={16}
                            height={16}
                            weight="regular"
                            className="text-white"
                        />
                    </div>
                    <div>
                        <p>Pagamento na entrega</p>
                        <p>
                            <strong>
                                {address?.paymentMethod
                                    ? paymentMethodTranslations[
                                          address?.paymentMethod
                                      ]
                                    : ""}
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
