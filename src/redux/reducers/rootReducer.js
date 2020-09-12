import { combineReducers } from "redux";

import PlayerReducer from "./playerReducer";
import ShuffleReducer from "./shuffleReducer";

const rootReducer = combineReducers({
  PlayerReducer,
  ShuffleReducer,
});

export default rootReducer;
