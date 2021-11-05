import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";

export const addChatAction = (chatName) => ({
  type: ADD_CHAT_ACTION,
  payload: chatName,
});

export const delChatAction = (chatId) => ({
  type: DELETE_CHAT_ACTION,
  payload: chatId,
});
