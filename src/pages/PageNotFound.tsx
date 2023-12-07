import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="h-screen max-w-[600px] mx-auto mt-20">
      <h1>Oops, couldn't find what you're looking for</h1>
      <Link
        to="/"
        className="underline flex gap-2 mx-auto"
      >
        {/* <svg */}
        {/*   xmlns="http://www.w3.org/2000/svg" */}
        {/*   width="1rem" */}
        {/*   height="1rem" */}
        {/*   viewBox="0 0 24 24" */}
        {/*   fill="none" */}
        {/*   stroke="currentColor" */}
        {/*   strokeWidth="2" */}
        {/*   strokeLinecap="round" */}
        {/*   strokeLinejoin="round" */}
        {/*   className="lucide lucide-move-up-right align-top" */}
        {/* > */}
        {/*   <path d="M13 5H19V11" /> */}
        {/*   <path d="M19 5L5 19" /> */}
        {/* </svg> */}
        Back to home
      </Link>
    </div>
  );
}
export default PageNotFound;
