import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { followUserAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowUserAC } from "../../redux/users-reducer";
import Users from "./Users";

class UsersContainer extends React.Component {
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
    return (
      <Users 
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        currentPage={this.props.currentPage}
        totalPages={this.props.totalCount}
        setCurrentPage={this.onPageChanged}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    currentPage: state.usersPage.currentPage,
    totalCount: state.usersPage.totalCount,
    pageSize: state.usersPage.pageSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followUserAC(userId)),
    unfollow: (userId) => dispatch(unfollowUserAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setUsersTotalCount: (count) => dispatch(setUsersTotalCountAC(count)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);;