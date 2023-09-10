import { Router } from "./Router";
import { AddressProvider } from "./context/AddressProvider";
import { CartProvider } from "./context/CartProvider";

function App() {
    return (
        <AddressProvider>
            <CartProvider>
                <Router />
            </CartProvider>
        </AddressProvider>
    );
}

export default App;
