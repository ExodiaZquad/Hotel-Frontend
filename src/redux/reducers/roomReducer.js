import { ActionTypes } from "../contants/action-types";

export const roomTypesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOM_TYPES:
      return { ...state, roomsTypes: payload };

    default:
      return state;
  }
};

export const roomsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ROOMS:
      return { ...state, rooms: payload };

    default:
      return state;
  }
};
