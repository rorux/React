import { TOGGLE_SHOW_NAME_ACTION } from "./constants";

const initialState = {
  showName: true,
  name: "Vasja",
};

export const profileReducer = (store = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME_ACTION:
      return {
        ...store,
        showName: !store.showName,
      };
    default: {
      return store;
    }
  }
};
