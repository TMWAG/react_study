import { connect } from "react-redux";
import { followUserAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowUserAC } from "../../redux/users-reducer";
import Users from "./Users";

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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;