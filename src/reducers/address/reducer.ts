import { AddressType } from "../../components/Checkout/CheckoutForm";
import { AddressActionTypes, AddressActions } from "./actions";

export function addressReducer(state: AddressType | null, action: AddressActions) {
    switch (action.type) {
        case AddressActionTypes.CREATE_ADDRESS:
            return action.payload.newAddress;

        default:
            return state;
    }
}
