import { createStore, combineReducers } from "redux";
import popupStateReducer from "./reducers/popupStateReducer/popupStateReducer";
import addItemReducer from "./reducers/addItemReducer/addItemReducer";

const rootReducer = combineReducers({
  popupStateReducer,
  addItemReducer,
});

export const store = createStore(rootReducer);

// eslint-disable-next-line
export type RootState = ReturnType<typeof rootReducer>;
