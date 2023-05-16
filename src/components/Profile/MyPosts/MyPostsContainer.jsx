import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();
  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreator(text));
  };
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return <MyPosts
    newPostText={state.profilePage.newPostText}
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
  />;
};

export default MyPostsContainer;