import React, {useState} from "react";
import { GiftedChat } from 'react-native-gifted-chat';
import SurveyScreen from "./SurveyScreen";


const MessageScreen = props => {

  const [messages, setMessages] = useState([
    {
      _id: 0,
      text: 'New room created.',
      createdAt: new Date().getTime(),
      system: true
    },

    {
      _id: 1,
      text: 'Henlo!',
      createdAt: new Date().getTime(),
      user: {
        _id: 2,
        name: 'Test User'
      }
    }
  ]);

  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }

  return (
    <>
      <SurveyScreen/>
      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        user={{ _id: 1 }}
      />
    </>

  );
};


export default MessageScreen;




