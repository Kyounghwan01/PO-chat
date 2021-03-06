//https://po-chat-server.azurewebsites.net
import * as type from "../constants/ActionTypes";
import { initalState } from "./index";
import firebase from "firebase/app";
import "firebase/database";
import axios from "axios";

const DetailChatsReducer = (state = initalState.detailChats, action) => {
  switch (action.type) {
    case type.ON_DETAIL_LOAD:
      return state.concat(action.detailChatDataProps);
    case type.ON_NEW_MESSAGE:
      // firebase
      //   .database()
      //   .ref(`chats/${action.chat_id}`)
      //   .update({
      //     created_at: action.created_at,
      //     title: action.title
      //   });
      // firebase
      //   .database()
      //   .ref(`fakeChatList/${action.id - 1}`)
      //   .update({
      //     by: action.by,
      //     id: action.id,
      //     chat_id: action.chat_id,
      //     created_at: action.created_at,
      //     title: action.title,
      //     thumbnail_image_url: action.thumbnail_image_url,
      //     position: "right"
      //   });

      axios.post("https://po-chat-server.azurewebsites.net/Chat/update",{
        by: action.by,
        id : action.chat_id,
        created_at : action.created_at,
        title : action.title,
        thumbnail_image_url: action.thumbnail_image_url,
      }).then(res => console.log(res.data));

      const newMessage = {
        by: action.by,
        created_at: action.created_at,
        chat_id: action.chat_id,
        id: action.id - 1,
        title: action.title,
        thumbnail_image_url : action.thumbnail_image_url
      };

      axios
        .post("https://po-chat-server.azurewebsites.net/ChatList/add", newMessage)
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

export default DetailChatsReducer;
