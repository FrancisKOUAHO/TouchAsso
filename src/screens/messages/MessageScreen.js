import React, { Component } from "react";
import { GiftedChat } from "react-native-gifted-chat";

class MessageScreen extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: "Bonjour",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "React Native",
            avatar: "https://placeimg.com/140/140/any",
          },
        },
      ],
    });

    setTimeout(() => {
      const message = {
        _id: 2,
        text: "Ca va et toi ?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      };
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }));
    }, 10000);
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    );
  }
}

export default MessageScreen;
