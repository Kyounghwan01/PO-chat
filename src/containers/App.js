import Chat from "../components/Chat";
import { connect } from "react-redux";
import { getData } from "../api";
import { initializeChatData, newMessageList } from "../actions";

const mapStateToProps = state => {
  return {
    chats: state.chats,
    detailChats: state.detailChats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      getData().then(res => {
        dispatch(initializeChatData(res));
      });
    },
    newMessenger: (by, id, created_at, thumbnail_image_url, title) => {
      dispatch(newMessageList(by, id, created_at, thumbnail_image_url, title));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
