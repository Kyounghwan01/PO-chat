import ChatList from "../components/ChatList";
import { connect } from "react-redux";
import { detailDate } from "../api";
import { onDetailLoad, onNewMessage } from "../actions";

const mapStateToProps = state => {
  return {
    detailChats: state.detailChats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDetail: () => {
      detailDate().then(res => {
        dispatch(onDetailLoad(res));
      });
    },
    getNewMessage: (
      by,
      id,
      chat_id,
      created_at,
      thumbnail_image_url,
      title
    ) => {
      dispatch(
        onNewMessage(by, id, chat_id, created_at, thumbnail_image_url, title)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);
