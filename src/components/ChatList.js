import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Chat.css";

export default class ChatList extends Component {
  constructor(props) {
    super(props);
    this.inputReset = React.createRef();
    this.scrollBox = React.createRef();
  }

  componentDidMount() {
    this.scrollBox.current.scrollTop = this.scrollBox.current.scrollHeight;
    if (!this.scrollBox.current.children.length) {
      this.props.onDetail();
    }
  }

  componentDidUpdate() {
    this.scrollBox.current.scrollTop = this.scrollBox.current.scrollHeight;
  }

  sendMessage = () => {
    if (!this.inputReset.current.value) {
      return;
    }
    const currentTime = new Date().toISOString();

    let thumImg;
    for (let i = 0; i < this.props.detailChats.length; i++) {
      if (this.props.detailChats[i].position === "right") {
        thumImg = this.props.detailChats[i].thumbnail_image_url;
      }
    }

    this.props.getNewMessage(
      this.props.location.id,
      this.props.detailChats.length + 1,
      Number(this.props.match.params.id),
      new Date(currentTime).toString().slice(16, 21),
      thumImg,
      this.inputReset.current.value
    );

    this.inputReset.current.value = "";
  };

  enterSubmit = e => {
    if (e.keyCode === 13) {
      this.sendMessage();
    }
  };

  renderChatList = () => {
    return this.props.detailChats.map(list => {
      if (list.chat_id !== Number(this.props.match.params.id)) {
        return;
      }
      return list.position === "left" ? (
        <div className="chat-box" key={list.id}>
          <img
            className="chat-left-thum-size"
            alt=""
            src={list.thumbnail_image_url}
          />
          <div className="chat-left-body">
            <span>{list.title}</span>
          </div>
          <span className="chat-left-date">{list.created_at}</span>
        </div>
      ) : (
        <div className="chat-right-box" key={list.id}>
          <img
            className="chat-right-thum-size"
            alt=""
            src={list.thumbnail_image_url}
          />
          <div className="chat-right-body">
            <span>{list.title}</span>
          </div>
          <span className="chat-right-date">{list.created_at}</span>
        </div>
      );
    });
  };

  render() {
    let title;
    for (let i = 0; i < this.props.detailChats.length; i++) {
      if (
        this.props.detailChats[i].chat_id === Number(this.props.match.params.id)
      ) {
        title = this.props.detailChats[i].by;
      }
    }

    return (
      <div className="background">
        <div className="chat-main-container">
          <div className="chat-block">
            <p className="chat-goback">
              <Link to="/">뒤로</Link>
            </p>
            <p className="chat-name">{title}</p>
          </div>
          <div className="chat-body" ref={this.scrollBox}>
            {this.renderChatList()}
          </div>
          <div className="chat-input">
            <input
              type="text"
              ref={this.inputReset}
              placeholder="Type Something to send"
              className="chat-footer"
              onKeyDown={this.enterSubmit}
            />
            <span className="chat-btn">
              <button className="chat-send" onClick={this.sendMessage}>
                <span>보내기</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ChatList.propTypes = {
  onDetail: PropTypes.func,
  getNewMessage: PropTypes.func,
  detailChats: PropTypes.array,
  newMessage: PropTypes.array
};
