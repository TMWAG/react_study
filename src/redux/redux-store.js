import profileReducer from './profile-reducer';
import messagesReducer from './messages-reducer';
import sidebarReducer from './sidebar-reducer';
import { combineReducers, legacy_createStore as createStore} from 'redux'
import usersReducer from './users-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
});

const store = createStore(reducers);

export default store;