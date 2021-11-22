import React from "react";
import "./style.scss";

const Message = React.memo(function Message({ message }) {
  return (
    <li>
      <p className="author">{message.author}</p>
      {message.text}
    </li>
  );
});

export default Message;
