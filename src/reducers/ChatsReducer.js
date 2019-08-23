import * as type from "../constants/ActionTypes";
import { initalState } from "./index";
import firebase from "firebase/app";
import 'firebase/database'

const ChatsReducer = (state = initalState.chats, action) => {
  console.log(action);
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
      firebase
        .database()
        .ref(`chats/${action.id - 1}`)
        .update({
          by: action.by,
          created_at: action.created_at,
          id: action.id - 1,
          thumbnail_image_url: action.thumbnail_image_url,
          title: action.title
        });
      return state.concat(action);
    default:
      return state;
  }
};

export default ChatsReducer;
