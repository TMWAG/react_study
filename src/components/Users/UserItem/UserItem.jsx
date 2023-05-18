import styles from './UserItem.module.css'

const UserItem = (props) => {
    return (
    <div className={styles.userItem}>
      <img src={props.user.profilePicture} alt={props.user.fullName} />
      <div>{props.user.fullName}</div>
      <div>{props.user.location.country}, {props.user.location.city}</div>
      <div>{props.user.status}</div>
      { props.user.followed
        ? <button onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
        : <button onClick={() => props.follow(props.user.id)}>Follow</button>
      }
    </div>
  );
};

export default UserItem;