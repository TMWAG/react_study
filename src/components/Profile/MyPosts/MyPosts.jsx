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
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
};

export default MyPosts;