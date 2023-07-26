import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

Logo.propTypes = {};

function Logo(props: any) {
  return (
    <Link to={`/`} className="flex justify-start items-center gap-5 px-5">
      <img src={reactLogo} className="logo react" alt="React logo" />
      <span className="text-2xl font-bold">Blog</span>
    </Link>
  );
}

export default Logo;
