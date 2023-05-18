import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';

const Users = (props) => {
  if (!props.users.length) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: 'Dmitry',
        status: 'Professional gnome',
        location: { city: 'Minsk', country: 'Belarus' },
        profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg',
      },
      {
        id: 2,
        followed: false,
        fullName: 'Sergey',
        status: 'Service worker',
        location: { city: 'Moscow', country: 'Russia' },
        profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg',
      },
      {
        id: 3,
        followed: true,
        fullName: 'Andrew',
        status: 'Linux enjoyer',
        location: { city: 'Kazan', country: 'Russia' },
        profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg',
      },
      {
        id: 4,
        followed: false,
        fullName: 'Roman',
        status: 'Runner',
        location: { city: 'Tbilisi', country: 'Georgia' },
        profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg',
      },
    ]);
  };
  debugger;
  const userElements = props.users.map(u => <UserItem key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />)
  return (
    <div className={styles.users}>
      {userElements}
    </div>
  );
};

export default Users;