const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

const initialState = {
  users: [],
  totalCount: 0,
  pageSize: 5,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => u.id === action.userId ? {...u, followed: true} : u),
      };      
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => u.id === action.userId ? {...u, followed: false} : u),
      };
    case SET_USERS:
      return { ...state, users: [...action.users] };
    case SET_USERS_TOTAL_COUNT:
      return { ...state, totalCount: action.count };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
};

export const followUserAC = (userId) => ({ type: FOLLOW, userId });

export const unfollowUserAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({ type: SET_USERS, users });

export const setUsersTotalCountAC = (count) => ({ type: SET_USERS_TOTAL_COUNT, count });

export const setCurrentPageAC = (page) => ({ type: SET_CURRENT_PAGE, page });

export default usersReducer;