import ReactDOM from "react-dom/client";
import {App} from "./app.tsx";
import "./index.css";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <ChakraProvider
        theme={extendTheme({
            config: {
                initialColorMode: "light",
                useSystemColorMode: false,
            },
        })}
    >
        <App />
    </ChakraProvider>
);
