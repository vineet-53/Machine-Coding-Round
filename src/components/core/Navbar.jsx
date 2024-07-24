import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="pl-4 font-extrabold text-xl flex items-center justify-start gap-3 w-screen bg-otp-tertiary text-[#FFFFFF] h-14">
      <Link to="/">Home</Link>
      <Link to="/course-list">Courses</Link>
      <Link to="/batches">Batches</Link>
    </nav>
  );
}
