import deepFreeze from 'deep-freeze';
import reducers, {initalState, chatsReducer} from "./index";
import _ from "lodash";
import {initializeChatData, onDetailLoad, onNewMessage} from '../actions';

const setup = (setupBefore = {}, setupAfter = {}, action = {}) => {
  const defaultState = deepFreeze(_.cloneDeep(initalState));
  const stateBefore = {...defaultState, ...setupBefore};
  const stateAfter = {...defaultState, ...setupAfter};

  deepFreeze(stateBefore);
  deepFreeze(action);

  return {
    stateBefore,
    stateAfter,
    action
  };
};

describe("get init data", () => {
  it("should provide this init state", ()=>{
    const {stateAfter} = setup();

    expect(initalState).toEqual(stateAfter);
  })

  // console.log(chatsReducer);

  test("should return initState", () => {
    expect(initalState).toHaveProperty('chats');
    expect(initalState.chats).toEqual([]);
    expect(initalState.detailChats).toEqual([]);
    expect(initalState.newMessage).toEqual([]);
    expect(reducers).toBeInstanceOf(Function);

    //가짜로 액션을 만든다

  });
});

describe('reducer', ()=>{
  it('action', ()=>{
    const {stateBefore, stateAfter, action} = setup({},{},
      initializeChatData([{by: "에디", id: 1, created_at: "23:21", title: "악덕 사장", thumbnail_image_url: "https://encrypted-tbn0.gstati", title: "뚠뚠"}]));
    expect(chatsReducer(stateBefore, action)).toEqual(stateAfter);
  })
})

//action으로 인한 값이 잘 바뀌는지

//원본 state와 그 다음 state가 레퍼런스가 다른지
//Object.freeze 리턴되는건 못건들이는

// { type: 'INITIAL_CHAT_DATA', chatDataProps: [ 'asd' ] }

// console.log src/reducers/index.js:13
//   { chats: [], detailChats: [], newMessage: [] }
