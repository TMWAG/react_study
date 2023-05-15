const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    },
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
    switch (action.type) {
      case ADD_POST:
        const newPost = {
          id: this._state.profilePage.posts.length,
          message: this._state.profilePage.newPostText,
          likes: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
        break;
      case UPDATE_NEW_POST_TEXT:
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
        break;
      default:
        break;
    }
  },
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
} 

export default store;