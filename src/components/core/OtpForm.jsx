import { useEffect, useRef, useState } from "react";
import FormButton from "./FormButton";
export default function OtpForm() {
  const [form, setForm] = useState(null);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [send, setSend] = useState(false);
  const [selectedInput, setSelectedInput] = useState(0);
  const numberOfInputs = 4;
  const inputRef = useRef([]);
  const validOTP = 1234;
  let sendTimeout = useRef(null);
  const styles =
    "w-14 h-14 md:w-20 md:h-20 pl-7 md:pl-10 bg-[#DBE2EF] rounded-md  text-xl md:text-3xl";

  const collectOTP = () => {
    let otp = "";
    const arr = inputRef.current.map((input) => {
      return input.value;
    });
    otp = arr.join("");
    return parseInt(otp);
  };
  const resetFormData = () => {
    inputRef.current.map((_, id) => {
      inputRef.current[id].value = "";
    });
    inputRef.current = [];
    setError(null);
    setSuccess(null);
    setSelectedInput(0);
  };
  const disableAllTheInputs = () => {
    inputRef.current.map((_, id) => {
      inputRef.current[id].disabled = true;
    });
  };
  const handlSubmit = (e) => {
    e.preventDefault();
    const data = collectOTP();
    if (data == validOTP) {
      setSuccess(true);
      disableAllTheInputs();
    } else {
      setError(true);
    }
  };

  const moveToNext = (id) => {
    if (selectedInput == numberOfInputs - 1 || id == numberOfInputs - 1) {
      return;
    }
    inputRef.current[id + 1].focus();
    setSelectedInput((prev) => prev + 1);
  };
  const moveToPrev = (id) => {
    if (selectedInput == 0 || id == 0) {
      return;
    }
    inputRef.current[id].value = "";
    inputRef.current[id - 1].focus();
    setSelectedInput((prev) => prev - 1);
  };
  useEffect(() => {
    clearInterval(sendTimeout.current);
    sendTimeout.current = setTimeout(() => {
      setSend(true);
    }, 5000);
  }, []);
  return (
    <div className="px-3 md:px-20 flex flex-col items-center font-primary bg-otp-secondary rounded-xl py-6 md:py-10 gap-y-3 md:gap-y-5">
      <h2 className="text-[#000000] text-3xl md:text-4xl text-center font-bold">
        Mobile Phone Verification
      </h2>
      <p className="text-md md:text-xl max-w-[400px] font-primary text-[#BFBFBF] font-normal  text-center">
        Enter the 4-digit verification code that was sent to your phone number.
      </p>
      <form
        onKeyDown={(e) => {
          if (e.keyCode == 27) {
            inputRef.current[selectedInput].blur();
          }
        }}
        onSubmit={handlSubmit}
        className="flex flex-col gap-y-5"
      >
        <div className="flex flex-row gap-3">
          {Array(numberOfInputs)
            .fill()
            .map((_, id) => {
              return (
                <input
                  type="text"
                  key={id}
                  ref={(el) => (inputRef.current[id] = el)}
                  className={`${styles}  ${success && "border-[1px] border-[#23CF9B]"} ${error && "border-[1px] border-[#EB2D5B]"}`}
                  maxLength={1}
                  onKeyDown={(e) => {
                    if (e.keyCode == 8) {
                      moveToPrev(id);
                    }
                  }}
                  onKeyUpCapture={(e) => {
                    if (e.keyCode != 8) {
                      moveToNext(id);
                    }
                  }}
                />
              );
            })}
        </div>
        <FormButton success={success} error={error} />
        {(send || error) && !success && (
          <div className="text-md md:text-xl max-w-[400px] font-primary text-[#BFBFBF] font-normal  text-center">
            Didn’t receive code?
            <span
              className="text-[#000000] px-4 font-bold cursor-pointer"
              onClick={() => {
                resetFormData();
              }}
            >
              Resend
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
