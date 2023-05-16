import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const onPostChange = (text) => {
          store.dispatch(updateNewPostTextActionCreator(text));
        };
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };
        return (
          <MyPosts
            newPostText={state.profilePage.newPostText}
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;