import { Link, useLocation } from "react-router-dom";

function Navbar({
  pageTitle,
  pageSubtitle,
  ...children
}: {
  pageTitle: string;
  pageSubtitle?: string;
  children?: React.ReactNode;
}) {
  const location = useLocation();
  return (
    <div className="px-6 py-4 border-b-[1px] border-gray-200 mb-2 float-top">
      {/* hardcoded breadcrumbs --dont-know-uri-structure */}
      <div>
        <span className="opacity-50 mx-1">first level menu</span>
        <span className="opacity-50 mx-1">/</span>
        <span className="opacity-50 mx-1">second level menu</span>
        <span className="opacity-50 mx-1">/</span>
        <Link to={location.pathname}>current</Link>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex gap-2">
          <span className="text-[20px] font-medium">{pageTitle}</span>
          <span>{pageSubtitle}</span>
        </div>
        {children && <div className="flex gap-2">{children.children}</div>}
      </div>
    </div>
  );
}

export default Navbar;
