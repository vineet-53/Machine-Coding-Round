import OtpForm from "../components/core/OtpForm";
import { Link } from "react-router-dom";
export default function Otp() {
  return (
    <div className="bg-otp-primary w-screen h-screen justify-center items-center flex">
      <div className="px-3 md:px-0">
        <h1 className="text-center mb-14 md:mb-20 text-otp-secondary font-extrabold text-5xl md:text-7xl">
          Chai aur Code
        </h1>
        <OtpForm />
      </div>
    </div>
  );
}
