import { useNavigate } from "react-router-dom";
import "./styles.css";

function BackBtn() {
  const navigate = useNavigate();

  return <button className="back_btn" onClick={() => navigate(-1)}>Voltar</button>;
}

export default BackBtn;
