import {
  ADD_CHAT_ACTION,
  DELETE_CHAT_ACTION,
  CHANGE_CHATS_ACTION,
} from "./constants";
import firebase from "firebase";
import { v1 as uuid } from "uuid";

export const addChatAction = (chatName) => ({
  type: ADD_CHAT_ACTION,
  payload: chatName,
});

export const delChatAction = (chatId) => ({
  type: DELETE_CHAT_ACTION,
  payload: chatId,
});

const getChatFromSnapshot = (snapshot) => {
  return { chatId: snapshot.key, name: snapshot.val().name };
};

const delChatFromSnapshot = (snapshot) => {
  return snapshot.key;
};

export const addChatWithFirebase = (name) => () => {
  firebase.database().ref("chats").child(uuid()).set({ name });
};

export const deleteChatWithFirebase = (chatId) => () => {
  firebase.database().ref("chats").child(chatId).remove();
  firebase.database().ref("messages").child(chatId).remove();
};

export const initChats = () => (dispatch) => {
  firebase
    .database()
    .ref("chats")
    .on("child_changed", (snapshot) => {
      console.log("child_changed");
      const payload = getChatFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_CHATS_ACTION,
        payload,
      });
    });

  firebase
    .database()
    .ref("chats")
    .on("child_added", (snapshot) => {
      const payload = getChatFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_CHATS_ACTION,
        payload,
      });
    });

  firebase
    .database()
    .ref("chats")
    .on("child_removed", (snapshot) => {
      const payload = delChatFromSnapshot(snapshot);
      dispatch({
        type: DELETE_CHAT_ACTION,
        payload,
      });
    });
};
