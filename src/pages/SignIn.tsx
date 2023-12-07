import axios from "../api/axios";
import { useEffect, useState } from "react";
import PhoneInput, {
  Country,
  parsePhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./phoneInput.css";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import useAuth from "../hooks/useAuth";

function SignIn() {
  const [value, setValue] = useState<string | undefined>("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // const [popupText, setPopupText] = useState("Encountered some error");
  const availableCountries: Country[] = ["IN"];
  const [popup, setPopup] = useState({
    text: "Please enter a valid phone number",
    type: "error",
    delay: 5000,
  });
  const navigate = useNavigate();
  const { setSignInAuth, auth } = useAuth();

  let popupTimerId: number | undefined;
  const showPopupTimeout = ({ message }: { message: string }) => {
    setPopup({ ...popup, text: message });
    // setPopupText(message);
    // console.log(message, popup);
    setShowPopup(true);
    clearTimeout(popupTimerId);
    popupTimerId = setTimeout(() => setShowPopup(false), popup.delay);
  };

  const handleSignIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInputDisabled(true);
    if (value && parsePhoneNumber(value)?.nationalNumber.length === 10) {
      // const phone_number = parsePhoneNumber(value)?.nationalNumber;
      try {
        const { data } = await axios.post(
          "/auth/login",
          JSON.stringify({ phoneNumber: value }),
          {
            headers: { "Content-Type": "application/json" },
          },
        );
        const { message, requestId } = data;
        console.log(message);
        setSignInAuth({
          isVerified: false,
          requestId,
          phoneNumber: value,
        });
        // console.log(message, requestId);
        navigate("/verify");
      } catch (err) {
        console.log(err);
        showPopupTimeout({ message: "Please try again" });
      }
    } else {
      showPopupTimeout({ message: "Please enter valid phone number" });
      setValue("");
    }
    setInputDisabled(false);
  };

  // focus input on render
  // const phoneRef = useRef<HTMLElement>(null);
  // const phoneRef = useRef();
  useEffect(() => {
    if (auth?.token) navigate("/");
  }, []);

  return (
    <div className="h-screen w-screen relative flex">
      <div className="mx-5 sm:mx-auto sm:w-1/2 lg:max-w-[500px] my-auto">
        <h1 className="text-[var(--primary)]">Sign In</h1>
        <p className="mb-6">
          Please enter your mobile number to login. We will send an OTP to
          verify your number.
        </p>
        <div>
          <form onSubmit={handleSignIn}>
            <PhoneInput
              // ref={phoneRef}
              limitMaxLength
              readOnly={inputDisabled}
              defaultCountry="IN"
              countries={availableCountries}
              placeholder="+91 Phone Number"
              value={value}
              onChange={setValue}
              disabled={inputDisabled}
            />
            <button
              className={`mt-4 text-center w-full p-2 bg-[var(--primary)] text-white rounded-[12px] ${
                inputDisabled ? "cursor-wait" : ""
              }`}
            >
              <h4>Sign In</h4>
            </button>
          </form>
        </div>
      </div>
      {showPopup && (
        <PopUp
          // text={popupText}
          {...popup}
        />
      )}
    </div>
  );
}

export default SignIn;
