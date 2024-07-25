const url = "https://chaicode.com";
import Logo from "../../assets/Logo.jpg";
export default function StickyLogo({ styles }) {
  return (
    <img
      src={Logo}
      onClick={() => {
        window.open(url);
      }}
      className={`z-50 sticky w-24 h-24 cursor-pointer w-20 h-20 lg:w-36 lg:h-36 rounded-lg lg:rounded-2xl ${styles}`}
    />
  );
}
