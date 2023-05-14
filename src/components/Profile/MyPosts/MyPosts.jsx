import { createRef } from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} likes={post.likes} />)

  let newPostElement = createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };

  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      <div>
        { postElements }
      </div>
    </div>
  )
};

export default MyPosts;