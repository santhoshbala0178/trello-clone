import { createStore, combineReducers } from 'redux';
import popupStateReducer from './reducers/popupStateReducer';
import addItemReducer from './reducers/addItemReducer';
import cardsReducer from './reducers/cardsReducer';

const rootReducer = combineReducers({
  popupStateReducer,
  addItemReducer,
  cardsReducer,
});

export const store = createStore(rootReducer);

// eslint-disable-next-line
export type RootState = ReturnType<typeof rootReducer>;
