import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

/* let arr = [
    { name: 'Darth', color: 'red' },
    { name: 'Leia', color: 'white' },
    { name: 'Luke', color: 'green' },
    { name: 'Chewbakka', color: 'brown' }
];

const arrObj = arr.map(el => <div className="character">
    <p><b>{el.name}:</b> <span>{el.color}</span></p>
</div>);

const content = <h2>Hello ReactWars</h2>; */


const newMessageBtn = <button onClick={addMessage}>Новое сообщение</button>
const messagesWrap = <div className="messages"></div>
function addMessage() {
    document.querySelector('.messages').insertAdjacentHTML('beforeend', '<p>Нормально</p>');
}

/* ReactDom.render(
    <div>
        {content}
        {arrObj}
    </div>
    , container); */
ReactDom.render(
    <div>
        {newMessageBtn}
        {messagesWrap}
    </div>
    , container);