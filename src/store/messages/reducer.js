import { ADD_MESSAGE_ACTION } from "./constants";
import { v1 as uuid } from "uuid";

const initialState = {
  messageList: {
    id1: [
      {
        messageId: 1,
        author: "Иван",
        text: "Привет!",
      },
      {
        messageId: 2,
        author: "Андрей",
        text: "Привет! Как дела?",
      },
    ],
    id2: [
      {
        messageId: 1,
        author: "Максим",
        text: "Сегодня во сколько планерка?",
      },
      {
        messageId: 2,
        author: "Сергей",
        text: "В 11:00",
      },
    ],
  },
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
    default: {
      return store;
    }
  }
};
