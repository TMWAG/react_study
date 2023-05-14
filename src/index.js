import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  { userId: 1, userName: 'Dima', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  { userId: 2, userName: 'Anderew', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  { userId: 3, userName: 'Sasha', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  { userId: 4, userName: 'Ira', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  { userId: 5, userName: 'Victor', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  { userId: 6, userName: 'Slava', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
];

let messages = [
  { id: 1, message: 'Hello' },
  { id: 2, message: 'I' },
  { id: 3, message: 'Am' },
  { id: 4, message: 'Gnome' },
  { id: 5, message: 'And you been gnoomed' },
];

let posts = [
  { id: 1, message: 'Hello world', likes: 12},
  { id: 1, message: 'Eeeeeee', likes: 2},
  { id: 1, message: 'Greg', likes: 9000},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      messages={messages}
      dialogs={dialogs}
      posts={posts}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
