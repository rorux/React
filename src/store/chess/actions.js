import {
  GET_CHESSPLAYER_START,
  GET_CHESSPLAYER_SUCCESS,
  GET_CHESSPLAYER_ERROR,
} from "./constants";
import { CHESSPLAYER_URL } from "../../api/constants";

const getChessStartAction = () => ({
  type: GET_CHESSPLAYER_START,
});

const getChessSuccessAction = (payload) => ({
  type: GET_CHESSPLAYER_SUCCESS,
  payload,
});

const getChessErrorAction = () => ({
  type: GET_CHESSPLAYER_ERROR,
});

export const getChessRequest = () => async (dispatch) => {
  dispatch(getChessStartAction());
  try {
    const response = await fetch(CHESSPLAYER_URL);

    if (!response.ok) {
      throw new Error(response.status);
    }

    const result = await response.json();

    dispatch(getChessSuccessAction(result));
  } catch {
    dispatch(getChessErrorAction());
  }
};
