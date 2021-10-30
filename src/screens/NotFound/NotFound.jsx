import { Link } from "react-router-dom";
import { GreenButton } from "../../components/Buttons";

function NotFound() {
  return (
    <div className="wrap-main">
      <h1>Страница не найдена..</h1>

      <Link to="/">
        <GreenButton>На главную</GreenButton>
      </Link>
    </div>
  );
}

export default NotFound;
