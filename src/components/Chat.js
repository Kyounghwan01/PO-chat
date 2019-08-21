import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./Chat.css";

class Chat extends Component {
  componentDidMount() {
    console.log(this.props);
    if (!document.querySelector(".chat-container")) {
      this.props.onLoad();
    }
  }

  renderChatList = () => {
    let newmessage;
    // if(this.props.newMessage.length){
    //   // console.log(this.props);
    //   newmessage = this.props.newMessage[this.props.newMessage.length -1].value
    // }
    return this.props.chats.map(list => {
      return (
        <div className="chat-container" key={list.id}>
          <img className="thum-size" alt="" src={list.thumbnail_image_url} />
          <NavLink
            to={{
              pathname: `/chats/${list.id}`
            }}
          >
            <div className="chat-info">
              <div className="chat-title-container">
                <p className="chat-by">{list.by}</p>
                <p className="chat-title">{newmessage ? newmessage : list.title}</p>
              </div>
              <p className="chat-date">{list.created_at}</p>
            </div>
          </NavLink>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="background">
        <div className="main-container">
          <div className="chat-menu">
            <p>CHAT</p>
          </div>
          <div className="message-block">
            <p>+ New message</p>
          </div>
          <div>{this.renderChatList()}</div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  onLoad: PropTypes.func,
  chats: PropTypes.array
};

export default Chat;
