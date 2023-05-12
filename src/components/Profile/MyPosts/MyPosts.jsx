import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>
        <Post message='Hello world' likes='12' />
        <Post message='EEeee' likes='2' />
        <Post message='greg' likes='9000' />
      </div>
    </div>
  )
};

export default MyPosts;