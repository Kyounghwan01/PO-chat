import * as type from "../constants/ActionTypes";
import {initalState} from './index';

const ChatsReducer = (state = initalState.chats, action) => {
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

export default ChatsReducer;
