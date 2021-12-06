import { createStore, combineReducers } from 'redux';
import popupStateReducer from './reducers/popupStateReducer/popupStateReducer';
import addItemReducer from './reducers/addItemReducer/addItemReducer';
import pageNavigateReducer from './reducers/pageNavigateReducer/pageNavigateReducer';

const rootReducer = combineReducers({
  popupStateReducer,
  addItemReducer,
  pageNavigateReducer,
});

export const store = createStore(rootReducer);

// eslint-disable-next-line
export type RootState = ReturnType<typeof rootReducer>;
