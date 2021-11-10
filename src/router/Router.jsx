import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../screens/Main";
import Chats from "../screens/Chats";
import Profile from "../screens/Profile";
import NoChat from "../screens/NoChat";
import NotFound from "../screens/NotFound";
import { ROUTES } from "./constants";
import Chess from "../screens/Chess/Chess";

export const Router = () => {
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.CHAT}>
        <Chats />
      </Route>
      <Route exact path={ROUTES.PROFILE}>
        <Profile />
      </Route>
      <Route exact path={ROUTES.CHESS}>
        <Chess />
      </Route>
      <Route exact path={ROUTES.NOCHAT}>
        <NoChat />
      </Route>
      <Route path={ROUTES.NOT_FOUND}>
        <NotFound />
      </Route>
      <Route>
        <Redirect exact to={ROUTES.NOT_FOUND} />
      </Route>
    </Switch>
  );
};
