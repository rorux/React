import logo from './logo.svg';
import './App.css';

function Message(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Message-text">
          {props.text}
        </p>
      </header>
    </div>
  );
}

export default Message;
