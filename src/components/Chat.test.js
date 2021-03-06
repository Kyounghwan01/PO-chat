import React from "react";
import { shallow, configure } from "enzyme";
import Chat from "./Chat";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Chat/>", () => {
  const actions = {
    onLoad: jest.fn(),
    newMessenger: jest.fn(),
    chats: [
      {
        by: "포비",
        created_at: "23:21",
        id: 4,
        thumbnail_image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC29fThdKdOEwhevwvrZbyXCy66zWz7MlTYU_bz7WLoDpzqPy2",
        title: "케익사줘"
      },
      {
        by: "에디",
        created_at: "11:21",
        id: 5,
        thumbnail_image_url: "",
        title: "배고파"
      }
    ]
  };

  it("should have element", () => {
    const component = shallow(
      <Chat
        onLoad={actions.onLoad}
        chats={actions.chats}
        newMessenger={actions.newMessenger}
      />
    );

    expect(component.exists("p")).toEqual(true);
    expect(component.exists("div")).toEqual(true);
    expect(component.exists("img")).toEqual(true);

    const wapperTitle = component.find(".chat-title").map(node => node.text());
    expect(wapperTitle).toEqual(["케익사줘", "배고파"]);

    const wapperBy = component.find(".chat-by").map(node => node.text());
    expect(wapperBy).toEqual(["포비", "에디"]);

    const newMessengerBtn = component.find(".message-block");
    newMessengerBtn.simulate("click");
    expect(actions.newMessenger).toHaveBeenCalledTimes(1);
  });

  it("should call onLoad prop on mount", () => {
    expect(actions.onLoad).toHaveBeenCalled();
  });
});
