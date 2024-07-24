import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Otp from "./pages/Otp";
import Courses from "./pages/Courses.jsx";
import Error from "./pages/Error";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to="/course-list" />} />
        <Route path="/otp-form" element={<Otp />} />
        <Route path="/course-list" element={<Courses />} />
        <Route path="/batches" element={""} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
