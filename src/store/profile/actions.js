import { TOGGLE_SHOW_NAME_ACTION, CHANGE_USER_NAME_ACTION } from "./constants";
import firebase from "firebase";

export const toggleShowNameAction = () => ({
  type: TOGGLE_SHOW_NAME_ACTION,
});

export const changeUserNameAction = (userName) => ({
  type: CHANGE_USER_NAME_ACTION,
  payload: userName,
});

export const setNameWithFirebase = (name) => () => {
  const uid = firebase.auth().currentUser.uid;
  firebase.database().ref("profile").child(uid).child("name").set(name);
};

export const watchUserName = () => (dispatch) => {
  const uid = firebase.auth().currentUser.uid;

  firebase
    .database()
    .ref("profile")
    .child(uid)
    .child("name")
    .on("value", (snapshot) => {
      dispatch(changeUserNameAction(snapshot.val()));
    });
};
