import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ text, author, chatId }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { text, author, chatId },
});
