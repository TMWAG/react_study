import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import UsersPagination from './UsersPagination/UsersPagination';

const Users = (props) => {
  const usersElements = props.users.map((u) => {
    return (
      <UserItem
        key={u.id}
        user={u}
        follow={props.follow}
        unfollow={props.unfollow}
      />
    );
  });
  return (
    <div className={styles.users}>
      <UsersPagination
        currentPage={props.currentPage}
        totalPages={props.totalPages}
        setCurrentPage={props.setCurrentPage}
      />
      {usersElements}
    </div>
  );
};

export default Users;