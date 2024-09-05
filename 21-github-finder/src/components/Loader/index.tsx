import { CgSpinner } from "react-icons/cg";
import "./styles.css";

function Loader() {
  return (
    <div>
      <CgSpinner className="loader" />
    </div>
  );
}

export default Loader;
