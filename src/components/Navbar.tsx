import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <div className="px-6 py-2 border-b-[1px] border-gray-200 mb-2 float-top">
      {location.pathname}
    </div>
  );
}

export default Navbar;
