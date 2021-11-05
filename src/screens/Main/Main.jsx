import { Link } from "react-router-dom";
import { GreenButton, BlueButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";

function Main() {
  return (
    <div className="wrap-main">
      <Link to={ROUTES.PROFILE}>
        <BlueButton>Профиль</BlueButton>
      </Link>

      <Link to={ROUTES.CHATS}>
        <GreenButton>Чаты</GreenButton>
      </Link>
    </div>
  );
}

export default Main;
