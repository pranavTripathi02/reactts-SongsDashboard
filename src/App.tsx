import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import VerifyOTP from "./pages/VerifyOTP";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={<Dashboard />}
            />
            <Route
                path="/signin"
                element={<SignIn />}
            />
            <Route
                path="/verify"
                element={<VerifyOTP />}
            />
        </Routes>
    );
}

export default App;
