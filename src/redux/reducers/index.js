import { combineReducers } from "redux";
import { roomsReducer, roomTypesReducer } from "./roomReducer";

const reducers = combineReducers({
  roomsTypes: roomTypesReducer,
  allRooms: roomsReducer,
});

export default reducers;
