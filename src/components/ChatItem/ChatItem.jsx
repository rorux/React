import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import DraftsIcon from "@material-ui/icons/Drafts";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import "./style.scss";

function ChatItem({
  id,
  chat,
  selectedChatId,
  onListItemClick,
  chatList,
  setChatList,
}) {
  const deleteChat = () => {
    const newChatList = {};
    Object.keys({ ...chatList }).forEach((idChatFullList) => {
      if (idChatFullList !== id)
        newChatList[idChatFullList] = chatList[idChatFullList];
    });
    setChatList(newChatList);
  };
  return (
    <ListItem
      button
      selected={selectedChatId === id}
      onClick={(event) => onListItemClick(event, id)}
    >
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <Link to={`/chats/${id}`}>
        <ListItemText primary={chat.name} />
      </Link>
      <ListItemSecondaryAction>
        <IconButton edge="end" aria-label="delete" onClick={deleteChat}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ChatItem;
