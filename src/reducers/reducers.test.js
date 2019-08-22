import { initalState } from "./index";
import ChatsReducer from './ChatsReducer';
import DetailChatsReducer from './DetailChatsReducer';
import { initializeChatData, onDetailLoad } from "../actions";

describe("reducer func test", () => {
  it("init state test", () => {
    expect(initalState).toHaveProperty("chats");
    expect(initalState.chats).toEqual([]);
    expect(initalState.detailChats).toEqual([]);
    expect(ChatsReducer(undefined, {})).toEqual(initalState.chats);
    expect(DetailChatsReducer(undefined, {})).toEqual(initalState.detailChats);
  });

  describe("action data test", () => {
    it("initializeChatData action test", () => {
      const initFunc = (by, created_at, id) => {
        return initializeChatData({
          by: by,
          created_at: created_at,
          id: id,
          thumbnail_image_url: ""
        });
      };

      expect(
        ChatsReducer(initalState.chats, initFunc("뽀로로", "09:21", 0))
      ).toEqual([
        { by: "뽀로로", created_at: "09:21", id: 0, thumbnail_image_url: "" }
      ]);

      expect(
        ChatsReducer(
          [
            {
              by: "뽀로로",
              created_at: "09:21",
              id: 0,
              thumbnail_image_url: ""
            }
          ],
          initFunc("에디", "29:21", 1)
        )
      ).toEqual([
        { by: "뽀로로", created_at: "09:21", id: 0, thumbnail_image_url: "" },
        { by: "에디", created_at: "29:21", id: 1, thumbnail_image_url: "" }
      ]);
    });

    it("onDetailLoad action test", () => {
      const initDetailFunc = (
        by,
        chat_id,
        created_at,
        id,
        position,
        thumbnail_image_url,
        title
      ) => {
        return onDetailLoad({
          by: by,
          chat_id: chat_id,
          created_at: created_at,
          id: id,
          position: position,
          thumbnail_image_url: thumbnail_image_url,
          title: title
        });
      };

      expect(
        DetailChatsReducer(
          [],
          initDetailFunc("루피", 0, "12:34", 1, "left", null, "내꿈은 해적왕")
        )
      ).toEqual([
        {
          by: "루피",
          chat_id: 0,
          created_at: "12:34",
          id: 1,
          position: "left",
          thumbnail_image_url: null,
          title: "내꿈은 해적왕"
        }
      ]);

      expect(
        DetailChatsReducer(
          [
            {
              by: "루피",
              chat_id: 0,
              created_at: "12:34",
              id: 1,
              position: "left",
              thumbnail_image_url: null,
              title: "내꿈은 해적왕"
            }
          ],
          initDetailFunc(
            "사스케",
            0,
            "15:24",
            2,
            "right",
            null,
            "나루토오오~!!!!"
          )
        )
      ).toEqual([
        {
          by: "루피",
          chat_id: 0,
          created_at: "12:34",
          id: 1,
          position: "left",
          thumbnail_image_url: null,
          title: "내꿈은 해적왕"
        },
        {
          by: "사스케",
          chat_id: 0,
          created_at: "15:24",
          id: 2,
          position: "right",
          thumbnail_image_url: null,
          title: "나루토오오~!!!!"
        }
      ]);
    });
  });
});
