import { CURRENT_PAGE } from "../constants/CurrentPage";
import { ActionTypes } from "../../types/ActionTypes";

interface IState {
  currentPage: {
    key: string;
    value: {
      desc: string;
      roomName: string;
    };
  };
}

const initialState: IState = {
  currentPage: {
    key: "-MeM7xV0cX4rD40_NgSS",
    value: {
      desc: "Everything For Games",
      roomName: "Game",
    },
  },
};

const currentPageReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};

export default currentPageReducer;
