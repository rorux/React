import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ text, author, chatId }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { text, author, chatId },
});

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
