import { createStore, combineReducers } from 'redux';
import popupStateReducer from './reducers/popupStateReducer';
import addItemReducer from './reducers/addItemReducer';
import cardsOrderReducer from './reducers/cardsOrderReducer';

const rootReducer = combineReducers({
  popupStateReducer,
  addItemReducer,
  cardsOrderReducer,
});

export const store = createStore(rootReducer);

// eslint-disable-next-line
export type RootState = ReturnType<typeof rootReducer>;
