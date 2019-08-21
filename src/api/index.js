import data from "./chat.json";
import detailData from './fakeChatList.json'

export const getData = () => {
  return new Promise((res, rej) => {
    setTimeout(function() {
      res(data);
    }, 300);
    if (!data) {
      rej(alert("데이터를 못받았습니다"));
    }
  });
};

export const detailDate = () => {
  return new Promise((res,rej) => {
    setTimeout(function(){
      res(detailData);
    },300);
    if(!detailData){
      rej(alert('데이터를 못받았습니다'));
    }
  })
}
