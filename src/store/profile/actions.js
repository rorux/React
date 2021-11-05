import { TOGGLE_SHOW_NAME_ACTION, CHANGE_USER_NAME_ACTION } from "./constants";

export const toggleShowNameAction = () => ({
  type: TOGGLE_SHOW_NAME_ACTION,
});

export const changeUserNameAction = (userName) => ({
  type: CHANGE_USER_NAME_ACTION,
  payload: userName,
});
