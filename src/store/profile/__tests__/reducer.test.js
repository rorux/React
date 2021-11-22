import { toggleShowNameAction } from "../actions.js";
import { profileReducer } from "../reducer.js";

describe("Check profileReducer", () => {
  test("Test toggleShowName", () => {
    const expected = {
      showName: false,
      userName: "",
    };

    const received = profileReducer(undefined, toggleShowNameAction());

    expect(received).toEqual(expected);
  });
});
