import { useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "../screens/Main";
import Chats from "../screens/Chats";
import Profile from "../screens/Profile";
import NoChat from "../screens/NoChat";
import NotFound from "../screens/NotFound";
import { ROUTES } from "./constants";

export const Router = () => {
  const [chatList, setChatList] = useState({
    id1: {
      name: "Chat1",
    },
    id2: {
      name: "Chat2",
    },
    id3: {
      name: "Chat3",
    },
  });
  return (
    <Switch>
      <Route exact path={ROUTES.MAIN}>
        <Main />
      </Route>
      <Route path={ROUTES.CHATS}>
        <Chats chatList={chatList} setChatList={setChatList} />
      </Route>
      <Route exact path={ROUTES.PROFILE}>
        <Profile />
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
