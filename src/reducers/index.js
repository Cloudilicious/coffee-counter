import { combineReducers } from 'redux';
import UsersReducer from './reducer_users'
import ActiveUser from './reducer_active_user'
import BeverageReducer from './reducer_beverage'

const rootReducer = combineReducers({
  users: UsersReducer,
  activeUser: ActiveUser,
  beverageCount: BeverageReducer
});

export default rootReducer;
