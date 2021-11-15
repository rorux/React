import { Redirect, Route } from "react-router-dom";
import { ROUTES } from "./constants";

export const PrivateRoute = ({ authed, ...rest }) =>
  authed ? <Route {...rest} /> : <Redirect to={ROUTES.LOGIN} />;
