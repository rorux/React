import { Link } from "react-router-dom";
import { GreenButton, BlueButton } from "../../components/Buttons";

function Main() {
  return (
    <div className="wrap-main">
      <Link to="/profile">
        <BlueButton>Профиль</BlueButton>
      </Link>

      <Link to="/chats">
        <GreenButton>Чаты</GreenButton>
      </Link>
    </div>
  );
}

export default Main;
