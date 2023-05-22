import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import axios from 'axios';

class Users extends React.Component {
  componentDidMount(){
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items);
      })
  }
  render() {
    const usersElements = this.props.users.map((u) => 
      {
        return (
          <UserItem
            key={u.id} 
            user={u} 
            follow={this.props.follow} 
            unfollow={this.props.unfollow}
          />
        );
      }
    )
    return(
      <div className={styles.users}>
        {usersElements}
      </div>
    );
  }
}

export default Users;