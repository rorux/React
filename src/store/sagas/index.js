import { takeLatest, delay } from "redux-saga/effects";

function* onAddMessageWithSaga(action) {
  yield delay(2000);
  console.log("SAGA 2 секунды после отправки сообщения");
}

function* mySaga() {
  yield takeLatest("MESSAGES::ADD_MESSAGE_ACTION", onAddMessageWithSaga);
}

export default mySaga;
