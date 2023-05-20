import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import axios from 'axios';

const Users = (props) => {  
  if (!props.users.length) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        props.setUsers(response.data.items);
      })
    
  };
  const userElements = props.users.map(u => <UserItem key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />)
  return (
    <div className={styles.users}>
      {userElements}
    </div>
  );
};

export default Users;