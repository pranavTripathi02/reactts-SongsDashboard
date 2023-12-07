import { useEffect, useState } from "react";

function PopUp({
  type,
  text,
  delay = 1000,
}: {
  type: string;
  text: string;
  delay?: number;
}) {
  const [showMessage, setShowMessage] = useState(true);

  // console.log(text);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, delay);
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, []);
  if (!showMessage) return null;

  return (
    <div
      className={`absolute bg-white p-2 w-1/2 mx-auto bottom-4 left-0 right-0 
      rounded-lg flex justify-center border border-gray-200 animate-popup 
      animate-duration-[${delay / 1000}s]`}
    >
      {type === "error" ? (
        <div className="text-red-500 inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
      ) : (
        <div className="text-green-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
      )}

      <p className="mx-4">{text}</p>
    </div>
  );
}

export default PopUp;
