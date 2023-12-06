import { useEffect, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

function SignIn() {
  const [value, setValue] = useState<string | undefined>("");
  const [inputDisabled, setInputDisabled] = useState(false);
  const phoneRef = useRef<HTMLElement>(null);
  // const phoneRef = useRef();
  const availableCountries: string[] | undefined = ["IN"];
  useEffect(() => {
    if (phoneRef.current) phoneRef.current.focus();
  }, []);
  return (
    <div>
      <form>
        <PhoneInput
          ref={phoneRef}
          countries={availableCountries}
          placeholder="Enter Phone Number"
          value={value}
          onChange={setValue}
          disabled={inputDisabled}
        />
      </form>
      hi
    </div>
  );
}

export default SignIn;
