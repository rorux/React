import { addMessageAction } from "../actions.js";
import { messagesReducer } from "../reducer.js";

describe("Check messagesReducer", () => {
  test("Test add message", () => {
    const expected = { text: "Привет", author: "Иван" };

    const received = messagesReducer(
      undefined,
      addMessageAction({ text: "Привет", author: "Иван", chatId: 123 })
    );

    const { ["messageId"]: messageIdConst, ...receivedMessage } =
      received["messageList"][123][0];
    expect(receivedMessage).toEqual(expected);
  });
});
