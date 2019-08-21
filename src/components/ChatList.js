import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "./Chat.css";

export default class ChatList extends Component {
  componentDidMount() {
    if (
      !document.querySelector(".chat-box") ||
      !document.querySelector(".chat-right-box")
    ) {
      this.props.onDetail();
    }
  }

  input = () => {
    let inputValue = document.querySelector(".chat-footer").value;
    if (!inputValue) {
      return;
    }
    let currentTime = `${new Date().getHours()}:${new Date().getMinutes()}`;

    let thumImg;
    for (let i = 0; i < this.props.detailChats.length; i++) {
      if (this.props.detailChats[i].position === "right") {
        thumImg = this.props.detailChats[i].thumbnail_image_url;
      }
    }
    document.querySelector(".chat-footer").value = "";

    this.props.getNewMessage(
      currentTime,
      inputValue,
      thumImg,
      Number(this.props.match.params.id)
    );
  };

  renderChatList = () => {
    return this.props.detailChats.map(list => {
      if (list.chat_id === Number(this.props.match.params.id)) {
        if (list.position === "left") {
          return (
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
          );
        } else {
          return (
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
        }
      }
    });
  };

  renderNewMessage = () => {
    console.log(this.props);
    if (this.props.newMessage) {
      return this.props.newMessage.map((list, index) => {
        if (list.chat_id === Number(this.props.match.params.id)) {
          return (
            <div className="chat-right-box" key={index}>
              <img className="chat-right-thum-size" alt="" src={list.img} />
              <div className="chat-right-body">
                <span>{list.value}</span>
              </div>
              <span className="chat-right-date">{list.time}</span>
            </div>
          );
        }
      });
    }
  };

  render() {
    let chatPeople = ["뽀로로", "에디", "루피", "사스케", "포비"];
    return (
      <div className="background">
        <div className="chat-main-container">
          <div className="chat-block">
            <p className="chat-goback">
              <Link to="/">뒤로</Link>
            </p>
            <p className="chat-name">
              {chatPeople[Number(this.props.match.params.id)]}
            </p>
          </div>
          <div className="chat-body">
            {this.renderChatList()}
            {this.renderNewMessage()}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type Something to send"
              className="chat-footer"
            />
            <span className="chat-btn">
              <button className="chat-send" onClick={this.input}>
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
  onDetail : PropTypes.func,
  getNewMessage : PropTypes.func,
  detailChats : PropTypes.array,
  newMessage : PropTypes.array
}
