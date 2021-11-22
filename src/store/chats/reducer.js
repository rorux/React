import {
  ADD_CHAT_ACTION,
  DELETE_CHAT_ACTION,
  CHANGE_CHATS_ACTION,
} from "./constants";
import { v1 as uuid } from "uuid";

const initialState = {
  chatList: {},
};

export const chatsReducer = (store = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION:
      return {
        ...store,
        chatList: {
          ...store.chatList,
          [uuid()]: { name: action.payload },
        },
      };
    case DELETE_CHAT_ACTION:
      const { [action.payload]: chatToDelete, ...restChats } = store.chatList;
      return {
        ...store,
        chatList: {
          ...restChats,
        },
      };
    case CHANGE_CHATS_ACTION:
      return {
        ...store,
        chatList: {
          ...store.chatList,
          [action.payload.chatId]: { name: action.payload.name },
        },
      };
    default: {
      return store;
    }
  }
};
