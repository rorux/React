import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";
import { v1 as uuid } from "uuid";

const initialState = {
  chatList: {
    id1: { name: "Chat1" },
    id2: { name: "Chat2" },
    id3: { name: "Chat3" },
  },
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
    default: {
      return store;
    }
  }
};
