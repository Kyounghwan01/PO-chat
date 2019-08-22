import * as type from "../constants/ActionTypes";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

export const initalState = {
  chats: [],
  detailChats: []
};

export const chatsReducer = (state = initalState.chats, action) => {
  switch (action.type) {
    case type.INITIAL_CHAT_DATA:
      return state.concat(action.chatDataProps);
    case type.ON_NEW_MESSAGE:
      const newState = state.map(chat => {
        if (chat.by === action.by) {
          return {
            ...chat,
            created_at: action.created_at,
            title: action.title
          };
        }
        return chat;
      });
      return newState;
    case type.NEW_MESSAGE_LIST:
      return state.concat(action);
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
        case type.ON_NEW_MESSAGE:
          return state.concat({
            by: action.by,
            id: action.id,
            chat_id: action.chat_id,
            created_at: action.created_at,
            title: action.title,
            thumbnail_image_url: action.thumbnail_image_url,
            position: "right"
          });
        default:
          return state;
      }
    }
  });

export default reducers;
