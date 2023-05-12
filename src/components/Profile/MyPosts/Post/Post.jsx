import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.postItem}>
      <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="placeholder" />
      <span>{props.message}</span>
      <button>
        ❤️ {props.likes}
      </button>
    </div>
  );
};

export default Post;