import { TOGGLE_SHOW_NAME_ACTION, CHANGE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: true,
  userName: "",
};

export const profileReducer = (store = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME_ACTION:
      return {
        ...store,
        showName: !store.showName,
      };
    case CHANGE_USER_NAME_ACTION:
      return {
        ...store,
        userName: action.payload,
      };
    default: {
      return store;
    }
  }
};
