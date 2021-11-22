import { React, useState } from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import List from "@material-ui/core/List";
import { ListSubheader } from "@material-ui/core";
import ChatItem from "../ChatItem";
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

function ChatList({ chatList }) {
  const { chatId } = useParams();
  const [selectedChatId, setSelectedChatId] = useState(chatId);

  const classes = useStyles();

  const handleListItemClick = (event, id) => {
    setSelectedChatId(id);
  };

  return (
    <>
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
            />
          ))}
        </List>
      </div>
    </>
  );
}

export default ChatList;
