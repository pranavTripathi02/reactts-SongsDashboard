import { useEffect, useState } from "react";
import PopUp from "../components/PopUp";
import useAuth from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "../api/axios";

function VerifyOTP() {
  const { signInAuth, setSignInAuth, setAuth } = useAuth();
  const [showPopup, setShowPopup] = useState(false);
  const [inputDisabled, setInputDisabled] = useState(false);
  // const [otp, setOtp] = useState(new Array(4).fill(""));
  // const otpBoxRef = useRef<HTMLInputElement[] | null>([]);
  const [otp, setOtp] = useState("");

  const [popup, setPopup] = useState({
    text: "Cannot verify, please try again",
    type: "error",
    delay: 5000,
  });
  const handleResend = () => {
    const message = "Re-sending OTP";
    setPopup({ ...popup, text: message });
    setShowPopup(true);
  };

  let popupTimerId: number | undefined;
  const showPopupTimeout = () => {
    // setPopupText(message);
    setShowPopup(true);
    clearTimeout(popupTimerId);
    popupTimerId = setTimeout(() => setShowPopup(false), popup.delay);
  };

  /* custom otp input method */
  // const handleInput = (e: any, value: string, idx: number) => {
  //   let newOtpArr = [...otp];
  //   newOtpArr[idx] = value;
  //   setOtp(newOtpArr);
  //   if (value && idx < 3) {
  //     // @ts-ignore
  //     otpBoxRef.current[idx + 1]?.focus();
  //   }
  //   console.log(e);
  //   if (e.key === "Backspace" && !e.target.value && idx > 0) {
  //     // @ts-ignore
  //     otpBoxRef.current[idx - 1]?.focus();
  //   }
  //   if (e.key === "Enter" && e.target.value && idx < 3) {
  //     // @ts-ignore
  //     otpBoxRef.current[idx + 1]?.focus();
  //   }
  // };

  const navigate = useNavigate();
  const handleVerify = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setInputDisabled(true);
    if (otp) {
      try {
        const { phoneNumber, requestId } = signInAuth;
        const { data } = await axios.post(
          "auth/verify_otp",
          JSON.stringify({
            phoneNumber,
            otp,
            requestId,
          }),
          {
            headers: { "Content-Type": "application/json" },
            // withCredentials: true,
          },
        );

        setSignInAuth({ phoneNumber: "" });
        setAuth(data);

        /* using localstorage to persist session for 2 minutes
                                                                since unable to set cookies through back-end */
        localStorage.setItem("token", data?.token);
        localStorage.setItem("tokenCreated", Date.now().toString());
        navigate("/");
      } catch (err) {
        console.error(err);
        showPopupTimeout();
        setOtp("");
      }
    } else {
      showPopupTimeout();
      setOtp("");
    }
    setInputDisabled(false);
  };

  useEffect(() => {
    if (signInAuth.phoneNumber.length < 1 || signInAuth.requestId.length < 1)
      navigate("/login");
  }, []);

  return (
    <div className="h-screen w-screen relative flex">
      <div className="mx-5 sm:mx-auto sm:w-1/2 lg:max-w-[500px] my-auto">
        <h1 className="text-[var(--primary)]">OTP Verification</h1>
        <p className="mb-6">
          We have sent an OTP to {signInAuth?.phoneNumber}. Please enter the
          code received to verify.
        </p>
        <div>
          <form onSubmit={handleVerify}>
            {/* <div className="flex justify-between text-center"> */}
            {/*   {otp.map((dig, idx) => ( */}
            {/*     <input */}
            {/*       key={idx} */}
            {/*       value={dig} */}
            {/*       maxLength={1} */}
            {/*       onChange={(e) => handleInput(e, e.target.value, idx)} */}
            {/*       // type="number" */}
            {/*       ref={(ref) => (otpBoxRef.current[idx] = ref)} */}
            {/*       disabled={inputDisabled} */}
            {/*       className="h-[5rem] w-[5rem] rounded-[4px] border border-gray-300" */}
            {/*     /> */}
            {/*   ))} */}
            {/* </div> */}
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              containerStyle={"flex justify-between text-center"}
              inputStyle={
                "h-[5rem] w-[5rem] rounded-[4px] border border-gray-300 text-center"
              }
              renderInput={(props) => (
                <input
                  {...props}
                  style={{ width: "" }}
                  disabled={inputDisabled}
                />
              )}
            />
            <button
              className={`mt-4 text-center w-full p-2 bg-[var(--primary)] text-white rounded-[12px] ${
                inputDisabled ? "cursor-wait" : ""
              }`}
              type="submit"
              disabled={inputDisabled}
            >
              <h4>Verify</h4>
            </button>
          </form>
          <div className="flex flex-col text-center gap-[1rem] mt-[2rem] underline">
            <button
              className="light"
              onClick={handleResend}
            >
              Resend OTP
            </button>
            <Link
              className="light"
              to="/login"
            >
              Use another number
            </Link>
          </div>
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

export default VerifyOTP;
