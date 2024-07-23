import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Otp from "./pages/Otp";
import Error from "./pages/Error";
const url = "https://chaicode.com";
function App() {
  return (
    <div className="relative">
      <Routes>
        <Route path="/" element={<Navigate to="/otp-form" />} />
        <Route path="/otp-form" element={<Otp />} />
        <Route path="/course-list" element={""} />
        <Route path="/batches" element={""} />
        <Route path="*" element={<Error />} />
      </Routes>
      <img
        src="../src/assets/Logo.jpg"
        alt=""
        onClick={() => {
          window.open(url);
        }}
        className="z-50 absolute w-24 h-24 cursor-pointer md:w-36 md:h-36 right-10 bottom-10 rounded-2xl"
      />
    </div>
  );
}

export default App;
