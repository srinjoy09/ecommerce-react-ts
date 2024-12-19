// src/main.tsx

import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "@chakra-ui/react/preset";
import { CartProvider } from "./context/CartProvider";
import App from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(

        <ChakraProvider value={system}>
            <CartProvider>
                <App />
            </CartProvider>
        </ChakraProvider>

);
