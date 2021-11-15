import {
  ADD_MESSAGE_ACTION,
  CHANGE_MESSAGES_ACTION,
  DELETE_MESSAGES_ACTION,
} from "./constants";
import firebase from "firebase";

export const addMessageAction = ({ text, author, chatId }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { text, author, chatId },
});

export const delMessagesAction = (chatId) => ({
  type: DELETE_MESSAGES_ACTION,
  payload: chatId,
});

const delChatFromSnapshot = (snapshot) => {
  return snapshot.key;
};

export const addMessageActionWithThunk = (payload) => (dispatch) => {
  dispatch(addMessageAction(payload));
  if (payload.author !== "Bot") {
    setTimeout(() => {
      const botAnswer = {
        text: "Hello, I'm Bot",
        author: "Bot",
        chatId: payload.chatId,
      };
      dispatch(addMessageAction(botAnswer));
    }, 1500);
  }
};

const getMessagesFromSnapshot = (snapshot) => {
  const messages = [];
  snapshot.forEach((message) => {
    messages.push(message.val());
  });
  return { chatId: snapshot.key, messages };
};

export const addMessageWithFirebase = (message) => async () => {
  firebase
    .database()
    .ref("messages")
    .child(message.chatId)
    .child(message.messageId)
    .set(message);
};

export const initMessageTracking = () => (dispatch) => {
  firebase
    .database()
    .ref("messages")
    .on("child_changed", (snapshot) => {
      const payload = getMessagesFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES_ACTION,
        payload,
      });
    });

  firebase
    .database()
    .ref("messages")
    .on("child_added", (snapshot) => {
      const payload = getMessagesFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES_ACTION,
        payload,
      });
    });

  firebase
    .database()
    .ref("chats")
    .on("child_removed", (snapshot) => {
      const payload = delChatFromSnapshot(snapshot);
      dispatch({
        type: DELETE_MESSAGES_ACTION,
        payload,
      });
    });
};
