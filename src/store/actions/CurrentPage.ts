import { CURRENT_PAGE } from "../constants/CurrentPage";
import { RoomTypes } from "../../types/RoomTypes";

export const changePage = (page: RoomTypes) => {
  return {
    type: CURRENT_PAGE,
    payload: page,
  };
};
