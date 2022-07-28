import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="min-vw-100 min-vh-100">
      {/* Header */}

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<Signin />} exact />
        <Route path="/signup" element={<Signup/>} exact />
        <Route path="/reset" element={<ResetPassword />} exact />
        <Route path="/*" element={<NotFound/>} exact />
      </Routes>
    </div>
  );
}

export default App;
