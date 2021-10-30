import { Link } from "react-router-dom";
import { GreenButton } from "../../components/Buttons";

function NoChat() {
  return (
    <div className="wrap-main">
      <h1>Чат не найден..</h1>

      <Link to="/chats">
        <GreenButton>Чаты</GreenButton>
      </Link>
    </div>
  );
}

export default NoChat;
