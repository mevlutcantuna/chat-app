import { CURRENT_PAGE } from "../store/constants/CurrentPage";
import { RoomTypes } from "./RoomTypes";

interface CurrentActionTypes {
  type: typeof CURRENT_PAGE;
  payload: RoomTypes;
}

export type ActionTypes = CurrentActionTypes;
