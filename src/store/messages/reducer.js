import {
  ADD_MESSAGE_ACTION,
  CHANGE_MESSAGES_ACTION,
  DELETE_MESSAGES_ACTION,
} from "./constants";
import { v1 as uuid } from "uuid";

const initialState = {
  messageList: {},
};

export const messagesReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION:
      const { text, author, chatId } = action.payload;
      const currentChatMessages = store.messageList[chatId] ?? [];
      return {
        ...store,
        messageList: {
          ...store.messageList,
          [chatId]: [
            ...currentChatMessages,
            { text, author, messageId: uuid() },
          ],
        },
      };
    case DELETE_MESSAGES_ACTION:
      const { [action.payload]: chatToDelete, ...restChats } =
        store.messageList;
      return {
        ...store,
        messageList: {
          ...restChats,
        },
      };
    case CHANGE_MESSAGES_ACTION:
      return {
        ...store,
        messageList: {
          ...store.messageList,
          [action.payload.chatId]: action.payload.messages,
        },
      };
    default: {
      return store;
    }
  }
};
