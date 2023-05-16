import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hello world', likes: 12},
        { id: 1, message: 'Eeeeeee', likes: 2},
        { id: 1, message: 'Greg', likes: 9000},
      ],
      newPostText: '',
    },
    messagesPage: {
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
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log('state was changed');
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  },
};

export default store;