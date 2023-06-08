import { CartProvider } from "./context/CartProvider";
import { Home } from "./pages/Home";

function App() {
    return (
        <CartProvider>
            <Home />
        </CartProvider>
    );
}

export default App;
