import Chat from "../components/Chat";
import { connect } from "react-redux";
import { getData } from "../api";
import { initializeChatData } from "../actions";

const mapStateToProps = state => {
  return {
    chats: state.chats,
    detailChats: state.detailChats,
    newMessage: state.newMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: () => {
      getData().then(res => {
        dispatch(initializeChatData(res));
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat);
