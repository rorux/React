import { Link } from "react-router-dom";
import { GreenButton, BlueButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";

function Main() {
  return (
    <div className="wrap-main">
      <Link to={ROUTES.SIGNUP}>
        <BlueButton>Регистрация</BlueButton>
      </Link>

      <Link to={ROUTES.LOGIN}>
        <GreenButton>Авторизация</GreenButton>
      </Link>
    </div>
  );
}

export default Main;
