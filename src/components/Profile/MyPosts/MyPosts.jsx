import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postElements = props.posts.map((post) => <Post message={post.message} likes={post.likes} />)

  const onPostChange = (e) => {
    props.updateNewPostText(e.target.value);
  }

  let onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={styles.posts}>
      My posts
      <div>
        <textarea value={props.newPostText} onChange={onPostChange}/>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div>
        { postElements }
      </div>
    </div>
  )
};

export default MyPosts;