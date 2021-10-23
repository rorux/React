import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DraftsIcon from "@material-ui/icons/Drafts";
import "./style.scss";

function ChatItem({ chat, selectedIndex, onClickFunc }) {
  return (
    <ListItem
      button
      selected={selectedIndex === chat.id}
      onClick={(event) => onClickFunc(event, chat.id)}
      key={chat.id}
    >
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary={chat.name} />
    </ListItem>
  );
}

export default ChatItem;
