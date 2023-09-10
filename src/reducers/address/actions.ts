import { AddressType } from "../../components/Checkout/CheckoutForm";

export enum AddressActionTypes {
    CREATE_ADDRESS = "CREATE_ADDRESS",
}

export function createNewAddressAction(newAddress: AddressType) {
    return {
        type: AddressActionTypes.CREATE_ADDRESS,
        payload: {
            newAddress,
        },
    } as const;
}

export type AddressActions = ReturnType<typeof createNewAddressAction>;
