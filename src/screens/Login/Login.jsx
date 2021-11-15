import { TextField } from "@material-ui/core";
import firebase from "firebase";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GreenButton } from "../../components/Buttons";
import { ROUTES } from "../../router/constants";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="wrap-main">
      <h1>Регистрация</h1>
      <div>
        <TextField
          id="outlined-basic"
          label="Введите email.."
          type="text"
          variant="filled"
          value={email}
          onChange={handleEmailChange}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        />
      </div>
      <div>
        <TextField
          id="outlined-basic"
          label="Введите пароль.."
          type="password"
          variant="filled"
          value={password}
          onChange={handlePassChange}
          style={{
            backgroundColor: "white",
            borderRadius: "5px",
            marginBottom: "15px",
          }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <GreenButton
          variant="contained"
          onClick={handleSubmit}
          disabled={!email || !password}
        >
          Войти
        </GreenButton>
      </div>
      <p>
        Нет аккаунта? <Link to={ROUTES.SIGNUP}>Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;
