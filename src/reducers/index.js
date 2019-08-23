import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import ChatsReducer from "./ChatsReducer";
import DetailChatsReducer from "./DetailChatsReducer";

export const initalState = {
  chats: [],
  detailChats: []
};

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    chats: ChatsReducer,
    detailChats: DetailChatsReducer
  });

export default reducers;
