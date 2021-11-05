import { Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";

function Header() {
  return (
    <header className="header">
      <Link to={ROUTES.MAIN}>Главная</Link>
      <Link to={ROUTES.PROFILE}>Профиль</Link>
      <Link to={ROUTES.CHATS}>Чаты</Link>
    </header>
  );
}

export default Header;
