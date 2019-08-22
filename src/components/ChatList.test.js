import React from "react";
import { shallow, configure } from "enzyme";
import ChatList from "./ChatList";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<ChatList/>", () => {
  const actions = {
    onDetail: jest.fn(),
    match: {
      params: {
        id: 0
      }
    },
    detailChats: [
      {
        by: "뽀로로",
        chat_id: 0,
        created_at: "01:21",
        id: 1,
        position: "right",
        thumbnail_image_url: "",
        title: "왓썹"
      }
    ]
  };

  it("init state test", () => {
    const component = shallow(
      <ChatList
        onDetail={actions.onDetail}
        detailChats={actions.detailChats}
        match={actions.match}
      />
    );

    const wapperChatName = component.find(".chat-name");
    expect(wapperChatName.text()).toEqual("뽀로로");
  });

  it("should call onDetail function", () => {
    expect(actions.onDetail).toHaveBeenCalled();
  });
});
