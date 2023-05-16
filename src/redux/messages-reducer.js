const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
  dialogs: [
    { userId: 1, userName: 'Dima', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 2, userName: 'Anderew', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 3, userName: 'Sasha', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 4, userName: 'Ira', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 5, userName: 'Victor', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 6, userName: 'Slava', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  ],
  messages: [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'I' },
    { id: 3, message: 'Am' },
    { id: 4, message: 'Gnome' },
    { id: 5, message: 'And you been gnoomed' },
  ],
  newMessageText: '',
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const newMessage = {
        id: state.messages.length,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessageText;
      return state;
    default:
      return state;
  }
};

export default messagesReducer;

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};
export const updateNewMessageTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: text,
  };
};