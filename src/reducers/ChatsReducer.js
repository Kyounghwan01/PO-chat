import * as type from "../constants/ActionTypes";
import { initalState } from "./index";
import firebase from "firebase/app";
import "firebase/database";
import axios from "axios";

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
      // firebase
      //   .database()
      //   .ref(`chats/${action.id - 1}`)
      //   .update({
      //     by: action.by,
      //     created_at: action.created_at,
      //     id: action.id - 1,
      //     thumbnail_image_url: action.thumbnail_image_url,
      //     title: action.title
      //   });
      //return state.concat(action);
      console.log(action);
      const newMessage = {
        by: action.by,
        created_at: action.created_at,
        chat_id: action.chat_id,
        id: action.id - 1,
        title: action.title
      };

      axios
        .post("http://localhost:5000/Chat/add", newMessage)
        .then(res => console.log(res.data));


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
};

export default ChatsReducer;
