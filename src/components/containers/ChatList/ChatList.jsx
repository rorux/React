import { React, useState } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { ListSubheader } from "@material-ui/core";
import ChatItem from "../../ChatItem";
import "./style.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "LightCyan",
    marginTop: 30,
    borderRadius: 5,
  },
}));

const MyListSubheader = styled(ListSubheader)({
  background: "DarkCyan",
  color: "white",
  fontSize: "1rem",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
});

function ChatList() {
  const [chats] = useState([
    { id: 1, name: "Чат 1" },
    { id: 2, name: "Чат 2" },
    { id: 3, name: "Чат 3" },
  ]);

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const chatItemsRender = chats.map((chat) => (
    <ChatItem
      chat={chat}
      onClickFunc={handleListItemClick}
      selectedIndex={selectedIndex}
      key={chat.id}
    />
  ));

  return (
    <div className={classes.root}>
      <List
        component="nav"
        aria-label="main mailbox folders"
        subheader={<li />}
      >
        <MyListSubheader>Список чатов</MyListSubheader>
        {chatItemsRender}
      </List>
    </div>
  );
}

export default ChatList;
