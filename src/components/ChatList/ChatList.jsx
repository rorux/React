import { React, useState } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";
import { Button, ListSubheader } from "@material-ui/core";
import ChatItem from "../ChatItem";
import "./style.scss";
import Modal from "../Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "LightCyan",
    marginTop: 30,
    borderRadius: 5,
  },
}));

const MyButton = styled(Button)({
  background: "ForestGreen",
  border: 0,
  borderRadius: 3,
  color: "white",
  boxShadow: "none",
  "&:hover": {
    background: "SeaGreen",
    boxShadow: "none",
  },
});

const MyListSubheader = styled(ListSubheader)({
  background: "DarkCyan",
  color: "white",
  fontSize: "1rem",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
});

function ChatList({ chatList, setChatList }) {
  const classes = useStyles();

  const { chatId } = useParams();
  const [selectedChatId, setSelectedChatId] = useState(
    chatId ? chatId : Object.keys(chatList)[0]
  );

  const handleListItemClick = (event, id) => {
    setSelectedChatId(id);
  };

  const [openModal, setOpenModal] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <div>
      <Modal
        openModal={openModal}
        handleClose={handleClose}
        chatList={chatList}
        setChatList={setChatList}
      />
      <div className={classes.root} style={{ marginBottom: 10 }}>
        <List
          component="nav"
          aria-label="main mailbox folders"
          subheader={<li />}
        >
          <MyListSubheader>Список чатов</MyListSubheader>
          {Object.keys(chatList).map((id, i) => (
            <ChatItem
              id={id}
              chat={chatList[id]}
              onListItemClick={handleListItemClick}
              selectedChatId={selectedChatId}
              key={i}
              chatList={chatList}
              setChatList={setChatList}
            />
          ))}
        </List>
      </div>
      <MyButton fullWidth onClick={handleClickOpen}>
        Добавить чат
      </MyButton>
    </div>
  );
}

export default ChatList;
