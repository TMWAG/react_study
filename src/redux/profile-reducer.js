const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
  posts: [
    { id: 1, message: 'Hello world', likes: 12},
    { id: 1, message: 'Eeeeeee', likes: 2},
    { id: 1, message: 'Greg', likes: 9000},
  ],
  newPostText: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length,
            message: state.newPostText,
            likes: 0,
          }
        ],
        newPostText: '',
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };
    default:
      return state;
  }
}

export default profileReducer;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  }
};
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPostText: text,
  }
};