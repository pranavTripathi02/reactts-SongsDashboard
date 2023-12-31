import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";

function Sidebar() {
  const logout = useLogout();
  return (
    <div className="h-screen hidden sm:flex flex-col justify-between sm:min-w-[255px] border-r-[1px] border-gray-200">
      <div>
        <h2 className="text-center text-[var(--primary)] text-[36px] my-6">
          Logo
        </h2>
        <nav className="flex flex-col mt-6">
          <Link
            to="/"
            className="flex pl-6 justify-between items-center h-[40px] bg-[var(--blueSelected)]"
          >
            <div className="flex gap-2.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                >
                  <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                  <path
                    fill="currentColor"
                    d="M19 11a2 2 0 0 1 1.995 1.85L21 13v6a2 2 0 0 1-1.85 1.995L19 21h-4a2 2 0 0 1-1.995-1.85L13 19v-6a2 2 0 0 1 1.85-1.995L15 11h4ZM9 15a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4Zm10-2h-4v6h4v-6ZM9 17H5v2h4v-2ZM9 3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Zm0 2H5v6h4V5Zm10-2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4Zm0 2h-4v2h4V5Z"
                  />
                </g>
              </svg>
              <span className="text-[var(--blue)]">Songs</span>
            </div>
            <span className="w-[5px] bg-[var(--blue)] mr-0 min-h-full" />
          </Link>
        </nav>
      </div>
      <div className="text-center flex mb-6 justify-center">
        <button onClick={() => logout()}>
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
            className="lucide lucide-log-out inline-block me-2"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line
              x1="21"
              x2="9"
              y1="12"
              y2="12"
            />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
