import {
  INITIAL_CHAT_DATA,
  ON_DETAIL_LOAD,
  ON_NEW_MESSAGE,
  NEW_MESSAGE_LIST
} from "../constants/ActionTypes";

export const initializeChatData = chatDataProps => ({
  type: INITIAL_CHAT_DATA,
  chatDataProps
});

export const onDetailLoad = detailChatDataProps => ({
  type: ON_DETAIL_LOAD,
  detailChatDataProps
});

export const newMessageList = (
  by,
  id,
  created_at,
  thumbnail_image_url,
  title
) => ({
  type: NEW_MESSAGE_LIST,
  by,
  id,
  created_at,
  thumbnail_image_url,
  title
});

export const onNewMessage = (by,id,chat_id,created_at,thumbnail_image_url,title) => ({
  type: ON_NEW_MESSAGE,
  by,
  id,
  chat_id,
  created_at,
  thumbnail_image_url,
  title,
});
