const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.length,
        message: state.newPostText,
        likes: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPostText;
      return state;
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