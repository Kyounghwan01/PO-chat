import * as type from "../constants/ActionTypes";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const initalState = {
  chats: [],
  detailChats: [],
  newMessage: []
};

export const chatsReducer = (state = initalState.chats, action) => {
  switch (action.type) {
    case type.INITIAL_CHAT_DATA:
      return state.concat(action.chatDataProps);
    default:
      return state;
  }
};

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    chats: chatsReducer,
    detailChats: (state = initalState.detailChats, action) => {
      switch (action.type) {
        case type.ON_DETAIL_LOAD:
          return state.concat(action.detailChatDataProps);
        default:
          return state;
      }
    },
    newMessage: (state = initalState.detailChats, action) => {
      switch (action.type) {
        case type.ON_NEW_MESSAGE:
          return state.concat({
            time: action.time,
            value: action.value,
            img: action.image,
            chat_id: action.chat_id,
            position: "right"
          });
        default:
          return state;
      }
    }
  });

export default reducers;
