import { Router } from "./Router";
import { CartProvider } from "./context/CartProvider";

function App() {
    return (
        <CartProvider>
            <Router />
        </CartProvider>
    );
}

export default App;
