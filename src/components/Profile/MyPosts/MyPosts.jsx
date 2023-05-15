import { createRef } from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/state';

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} likes={post.likes} />)
  let newPostElement = createRef();

  const onPostChange = () => {
    props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value));
  }

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        { postElements }
      </div>
    </div>
  )
};

export default MyPosts;