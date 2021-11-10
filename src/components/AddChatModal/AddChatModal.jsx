import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { addChatAction } from "../../store/chats/actions";
import { useDispatch } from "react-redux";

export default function AddChatModal({ openModal, handleClose }) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.keyCode !== 13) {
      setText(event.target.value);
    } else {
      addChat();
    }
  };

  const addChat = () => {
    dispatch(addChatAction(text));
    handleClose();
    setText("");
  };

  return (
    <div>
      <Dialog
        open={openModal}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Создание чата</DialogTitle>
        <DialogContent>
          <DialogContentText>Введите название</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Новый чат"
            type="text"
            fullWidth
            value={text}
            onChange={handleChange}
            onKeyUp={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Отмена
          </Button>
          <Button onClick={addChat} color="primary" disabled={!text}>
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
