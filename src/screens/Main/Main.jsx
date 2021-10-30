import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const MyButton = styled(Button)({
  background: "ForestGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  boxShadow: "none",
  "&:hover": {
    background: "SeaGreen",
    boxShadow: "none",
  },
});

function Main() {
  return (
    <div className="wrap-main">
      <Link to="/profile">
        <MyButton>Профиль</MyButton>
      </Link>

      <Link to="/chats">
        <MyButton>Чаты</MyButton>
      </Link>
    </div>
  );
}

export default Main;
