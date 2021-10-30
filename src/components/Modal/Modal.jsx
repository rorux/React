import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function Modal({
  openModal,
  handleClose,
  chatList,
  setChatList,
}) {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    if (event.keyCode !== 13) {
      setText(event.target.value);
    } else {
      addChat();
    }
  };

  const addChat = () => {
    if (text) {
      const chatListChange = { ...chatList };
      const lastId = Object.keys(chatListChange).slice(-1)[0];
      const lastIdNum = +lastId.replace("id", "");
      const newIdNum = lastIdNum + 1;
      const newId = "id" + newIdNum;
      chatListChange[newId] = { name: text };
      setChatList(chatListChange);
      handleClose();
      setText("");
    }
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
          <Button onClick={(handleClose, addChat)} color="primary">
            Создать
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
