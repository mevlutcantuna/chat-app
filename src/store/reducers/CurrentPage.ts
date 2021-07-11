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
    key: "-MeKAM-18njtfCRMnuna",
    value: {
      desc: "Sohbet",
      roomName: "Kanal 1",
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
