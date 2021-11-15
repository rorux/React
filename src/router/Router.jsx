import { Route, Switch, Redirect } from "react-router-dom";
import firebase from "firebase";
import Main from "../screens/Main";
import Chats from "../screens/Chats";
import Profile from "../screens/Profile";
import NoChat from "../screens/NoChat";
import NotFound from "../screens/NotFound";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import { ROUTES } from "./constants";
//import Chess from "../screens/Chess/Chess";
import { useEffect, useState } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const Router = () => {
  const [authed, setAuthed] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setAuthed(true);
      } else {
        setAuthed(null);
      }
    });
  }, []);

  return (
    <Switch>
      <PublicRoute exact authed={authed} path={ROUTES.MAIN}>
        <Main />
      </PublicRoute>
      <PublicRoute exact authed={authed} exact path={ROUTES.LOGIN}>
        <Login />
      </PublicRoute>
      <PublicRoute exact authed={authed} exact path={ROUTES.SIGNUP}>
        <SignUp />
      </PublicRoute>
      <PrivateRoute authed={authed} path={ROUTES.CHAT}>
        <Chats />
      </PrivateRoute>
      <PrivateRoute authed={authed} exact path={ROUTES.PROFILE}>
        <Profile />
      </PrivateRoute>
      {/* <Route exact path={ROUTES.CHESS}>
        <Chess />
      </Route> */}
      <PrivateRoute authed={authed} exact path={ROUTES.NOCHAT}>
        <NoChat />
      </PrivateRoute>
      <Route path={ROUTES.NOT_FOUND}>
        <NotFound />
      </Route>
      <Route>
        <Redirect exact to={ROUTES.NOT_FOUND} />
      </Route>
    </Switch>
  );
};
