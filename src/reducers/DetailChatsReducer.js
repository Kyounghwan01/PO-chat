import * as type from "../constants/ActionTypes";
import { initalState } from "./index";

const DetailChatsReducer = (state = initalState.detailChats, action) => {
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
};

export default DetailChatsReducer;
