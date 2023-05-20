import styles from './UserItem.module.css'
import usePicture from '../../../assets/images/user.png'

const UserItem = (props) => {
    return (
    <div className={styles.userItem}>
      <img src={props.user.photos.small === null ? usePicture : props.user.photos.small} alt={props.user.name} />
      <div>{props.user.name}</div>
      <div>{props.user.status}</div>
      { props.user.followed
        ? <button onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
        : <button onClick={() => props.follow(props.user.id)}>Follow</button>
      }
    </div>
  );
};

export default UserItem;