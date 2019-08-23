import firebase from "firebase/app";
import 'firebase/database'

firebase.initializeApp({
  apiKey: "AIzaSyCCG-o1AvF56_O2yIsTvB_S1FDGcFulrbw",
  authDomain: "view-im-lovely-with-firebase.firebaseapp.com",
  databaseURL: "https://view-im-lovely-with-firebase.firebaseio.com",
  projectId: "view-im-lovely-with-firebase",
  storageBucket: "",
  messagingSenderId: "874265141163",
  appId: "1:874265141163:web:855b6c359b94c26b"
});

const database = firebase.database();

export const getData = () => {
  return new Promise((res, rej) => {
    database.ref("/chats/").once("value").then(function(snapshot) {
      const data = snapshot.val();
      res(data);
    }).catch(function(err){
      rej(err);
    });
  });
};

export const detailDate = () => {
  return new Promise((res, rej) => {
    database.ref("/fakeChatList/").once("value").then(function(snapshot) {
      const data = snapshot.val();
      res(data);
    }).catch(function (err) {
      rej(err);
    });
  });
};
