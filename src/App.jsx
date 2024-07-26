import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Otp from "./pages/Otp";
import Courses from "./pages/Courses.jsx";
import Batches from "./pages/Batches.jsx";
import Error from "./pages/Error";
import Navbar from "./components/core/Navbar.jsx";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/batches" />} />
        <Route path="/otp-form" element={<Otp />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/batches" element={<Batches />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
