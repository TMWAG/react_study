import styles from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let postsData = [
    { id: 1, message: 'Hello world', likes: 12},
    { id: 1, message: 'Eeeeeee', likes: 2},
    { id: 1, message: 'Greg', likes: 9000},
  ];

  let postElements = postsData.map((post) => <Post message={post.message} likes={post.likes} />)

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