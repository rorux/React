import { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getChessRequest } from "../../store/chess/actions";
import { chessSelector } from "../../store/chess/selectors";

function Chess() {
  const dispatch = useDispatch();
  const { loading, error, chessPlayer } = useSelector(chessSelector);

  const handleGetChessPlayer = () => {
    dispatch(getChessRequest());
  };

  useEffect(() => {
    handleGetChessPlayer();
  }, []);

  if (loading) return <CircularProgress />;

  if (error)
    return (
      <div>
        <div>Произошла ошибка</div>
        <button onClick={handleGetChessPlayer}>
          Получить данные о шахматисте
        </button>
      </div>
    );

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Шахматист</h2>
      {Object.keys(chessPlayer).map((key) =>
        key === "avatar" ? (
          <p key={key}>
            <img src={chessPlayer[key]} alt="ChessPlayer" />
          </p>
        ) : (
          <p key={key}>
            <strong style={{ color: "#666" }}>{key}:</strong> {chessPlayer[key]}
          </p>
        )
      )}
    </div>
  );
}

export default Chess;
