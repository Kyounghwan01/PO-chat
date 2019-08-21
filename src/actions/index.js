import {
  INITIAL_CHAT_DATA,
  ON_DETAIL_LOAD,
  ON_NEW_MESSAGE
} from "../constants/ActionTypes";

export const initializeChatData = chatDataProps => ({
  type: INITIAL_CHAT_DATA,
  chatDataProps
});

export const onDetailLoad = detailChatDataProps => ({
  type: ON_DETAIL_LOAD,
  detailChatDataProps
});

export const onNewMessage = (time, value, image, chat_id) => ({
  type: ON_NEW_MESSAGE,
  time,
  value,
  image,
  chat_id
});
