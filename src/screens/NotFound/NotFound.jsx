import { Link } from "react-router-dom";
import { GreenButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";

function NotFound() {
  return (
    <div className="wrap-main">
      <h1>Страница не найдена..</h1>

      <Link to={ROUTES.MAIN}>
        <GreenButton>На главную</GreenButton>
      </Link>
    </div>
  );
}

export default NotFound;
