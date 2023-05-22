import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, setUsersTotalCount, toggleIsFetching, unfollow } from "../../redux/users-reducer";
import Users from "./Users";
import Loader from "../common/Loader/Loader";

class UsersContainer extends React.Component {
  componentDidMount(){
    this.props.toggleIsFetching(true);
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
        this.props.toggleIsFetching(false);
      });
  }
  onPageChanged = (page) => {
    this.props.toggleIsFetching(true);
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
      this.props.toggleIsFetching(false);
    })
  };
  render() {
    return (
        this.props.isFetching
        ? <Loader/> 
        :<Users 
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
    isFetching: state.usersPage.isFetching,
  };
};


export default connect(
  mapStateToProps, 
  {
    follow, 
    unfollow, 
    setUsers, 
    setUsersTotalCount, 
    setCurrentPage, 
    toggleIsFetching
  }
)(UsersContainer);