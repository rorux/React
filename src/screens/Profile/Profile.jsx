import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowNameAction,
  changeUserNameAction,
} from "../../store/profile/actions";
import { profileSelector } from "../../store/profile/selectors";
import { GreenButton, BlueButton } from "../../components/Buttons";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { ROUTES } from "../../router/constants";

function Profile() {
  const { userName, showName } = useSelector(profileSelector);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const setShowName = useCallback(() => {
    dispatch(toggleShowNameAction());
  }, [dispatch]);

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const setName = () => {
    dispatch(changeUserNameAction(value));
  };

  return (
    <div className="wrap-main">
      <h1>Профиль</h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Введите имя.."
          variant="filled"
          value={value}
          onChange={handleChange}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
          }}
        />
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        <GreenButton disabled={!value} onClick={setName}>
          Изменить имя
        </GreenButton>
        <br />
        <br />
        <BlueButton onClick={setShowName}>Показать / Скрыть</BlueButton>
        <p style={{ fontWeight: "bold", color: "beige" }}>
          {showName && userName}
        </p>
        <p>
          <Link to={ROUTES.CHATS}>
            <GreenButton>В чаты</GreenButton>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Profile;
