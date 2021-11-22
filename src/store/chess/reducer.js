import {
  GET_CHESSPLAYER_START,
  GET_CHESSPLAYER_SUCCESS,
  GET_CHESSPLAYER_ERROR,
} from "./constants";

const initialState = {
  loading: true,
  error: false,
  chessPlayer: {},
};

export const chessReducer = (store = initialState, action) => {
  switch (action.type) {
    case GET_CHESSPLAYER_START:
      return {
        ...store,
        loading: true,
        error: false,
      };
    case GET_CHESSPLAYER_SUCCESS:
      return {
        ...store,
        loading: false,
        chessPlayer: action.payload,
      };
    case GET_CHESSPLAYER_ERROR:
      return {
        ...store,
        error: true,
        loading: false,
      };

    default: {
      return store;
    }
  }
};
