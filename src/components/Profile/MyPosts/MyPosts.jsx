import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} likes={post.likes} />)

  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add Post</button>
      </div>
      <div>
        { postElements }
      </div>
    </div>
  )
};

export default MyPosts;