import { AppAction, AppState } from './AppContext';
import { User } from 'types';
import { addFilter, removeFilter } from 'components/Filter';

type appReducer = (prevState: AppState, action: AppAction) => AppState;

const reducer: appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'setCurrentUser':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'setName':
      const setNameUserIndex = state.users.findIndex((user: User) => user.name === action.targetUser);
      if (setNameUserIndex === -1) {
        return state;
      }
      const usersCopy = [...state.users];
      usersCopy[setNameUserIndex].name = action.payload;
      return {
        ...state,
        users: usersCopy,
      };
    case 'likeUser':
      const userI = state.users.findIndex((user: User) => user.name === action.targetUser.name);
      if (userI === -1) {
        console.log('COuldnt find index');
        return state;
      }
      const usersCopied = [...state.users];
      let newUser: User = { ...usersCopied[userI], liked: !usersCopied[userI].liked };
      usersCopied[userI] = newUser;
      return {
        ...state,
        currentUser: newUser,
        users: usersCopied,
      };
    case 'setFilter':
      return {
        ...state,
        filter: addFilter(action.payload, state),
      };
    case 'removeFilter':
      return {
        ...state,
        filter: removeFilter(action.payload, state),
      };
    case 'darkmode':
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    default:
      return state;
  }
};

export default reducer;
