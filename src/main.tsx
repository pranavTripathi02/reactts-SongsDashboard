import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authContext.tsx";
import { SongsProvider } from "./context/songsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <SongsProvider>
                    <App />
                </SongsProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
