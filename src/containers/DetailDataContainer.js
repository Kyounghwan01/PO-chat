import ChatList from "../components/ChatList";
import { connect } from "react-redux";
import { detailDate } from "../api";
import { onDetailLoad, onNewMessage } from "../actions";

const mapStateToProps = state => {
  return {
    detailChats: state.detailChats,
    newMessage: state.newMessage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDetail: () => {
      detailDate().then(res => {
        dispatch(onDetailLoad(res));
      });
    },
    getNewMessage: (time, value, image, chat_id) => {
      dispatch(onNewMessage(time, value, image, chat_id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);
