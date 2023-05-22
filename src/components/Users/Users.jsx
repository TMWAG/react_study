import React from 'react';
import UserItem from './UserItem/UserItem';
import styles from './Users.module.css';
import axios from 'axios';
import UsersPagination from './UsersPagination/UsersPagination';

class Users extends React.Component {
  componentDidMount(){
    axios.get(
      'https://social-network.samuraijs.com/api/1.0/users',
      {
        params: {
          page: this.props.currentPage,
          count: this.props.pageSize,
        },
      }
    ).then(response => {
        this.props.setUsers(response.data.items);
        this.props.setUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = (page) => {
    this.props.setCurrentPage(page);
    axios.get(
      'https://social-network.samuraijs.com/api/1.0/users',
      {
        params: {
          page,
          count: this.props.pageSize,
        },
      }
    ).then(response => {
      this.props.setUsers(response.data.items);
    })
  };
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
        <UsersPagination 
          currentPage={this.props.currentPage} 
          totalPages={this.props.totalCount}
          setCurrentPage={this.onPageChanged}
        />        
        {usersElements}
      </div>
    );
  }
}

export default Users;