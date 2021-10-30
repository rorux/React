import "./style.scss";

function Message({ message }) {
  return (
    <li>
      <p className="author">{message.author}</p>
      {message.text}
    </li>
  );
}

export default Message;
