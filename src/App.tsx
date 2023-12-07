import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import VerifyOTP from "./pages/VerifyOTP";
import PageNotFound from "./pages/PageNotFound";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<Dashboard />}
        />
      </Route>
      <Route
        path="/login"
        element={<SignIn />}
      />
      <Route
        path="/verify"
        element={<VerifyOTP />}
      />
      <Route
        path="/*"
        element={<PageNotFound />}
      />
    </Routes>
  );
}

export default App;
