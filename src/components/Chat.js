import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import format from "date-fns/format";
import { koLocale } from "date-fns/locale/ko";
import "./Chat.css";

export default class Chat extends Component {
  constructor(props){
    super(props);
    this.checkContainer = React.createRef();
  }
  componentDidMount() {
    if (!this.checkContainer.current) {
      this.props.onLoad();
    }
  }

  generateRandomString = length => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  };

  newMessenger = () => {
    this.props.newMessenger(
      this.generateRandomString(3),
      this.props.chats.length + 1,
      format(new Date(), "HH:mm", {
        locale: koLocale
      }),
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCptH2CO7ebtW4Yxt9rfKnHBjFD1NdNt4bUGYy4TO0YNznJ4Vr",
      this.generateRandomString(10)
    );
  };

  renderChatList = () => {
    let sortTime = this.props.chats
      .sort(function(prev, next) {
        return next.created_at.slice(3) - prev.created_at.slice(3);
      })
      .sort(function(prev, next) {
        return next.created_at.slice(0, 2) - prev.created_at.slice(0, 2);
      });

    return sortTime.map(list => {
      return (
        <NavLink
          to={{
            pathname: `/chats/${list.id}`,
            id: list.by
          }}
          key={list.id}
          className="chat-nav"
        >
          <div className="chat-container" ref={this.checkContainer}>
            <img className="thum-size" alt="" src={list.thumbnail_image_url} />
            <div className="chat-info">
              <div className="chat-title-container">
                <p className="chat-by">{list.by}</p>
                <p className="chat-title">{list.title}</p>
              </div>
              <p className="chat-date">{list.created_at}</p>
            </div>
          </div>
        </NavLink>
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
          <div className="message-block"
          onClick={this.newMessenger}
          >
            <p>+ New message</p>
          </div>
          <div className="message-list">{this.renderChatList()}</div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  onLoad: PropTypes.func,
  chats: PropTypes.array
};
