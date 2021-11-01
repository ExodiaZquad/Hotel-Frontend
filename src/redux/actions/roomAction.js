import { ActionTypes } from "../contants/action-types";

export const setRoomTypes = (types) => {
  return {
    type: ActionTypes.SET_ROOM_TYPES,
    payload: types,
  };
};

export const setRooms = (rooms) => {
  return {
    type: ActionTypes.SET_ROOMS,
    payload: rooms,
  };
};

export const selectedRoom = (room) => {
  return {
    type: ActionTypes.SELECTED_ROOM,
    payload: room,
  };
};
