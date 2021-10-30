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

function NotFound() {
  return (
    <div className="wrap-main">
      <h1>Страница не найдена..</h1>

      <Link to="/">
        <MyButton>На главную</MyButton>
      </Link>
    </div>
  );
}

export default NotFound;
