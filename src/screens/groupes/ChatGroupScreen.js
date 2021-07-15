import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const API_URL = Platform.OS === "ios" ? "https://api-touch-assso.herokuapp.com" : "https://api-touch-assso.herokuapp.com";


const ChatGroupSreen = props => {
  const [messages, setMessages] = useState([]);

  let user = props.route.params;
  console.log(user);


  useEffect(() => {
    fetch(`${API_URL}/groupe/${user.id}/message`)
      .then((response) => response.json())
      .then((json) => setMessages(json))
      .catch((error) => console.error(error));
  }, []);

  const onSend = useCallback((messages = []) => {
    fetch(`${API_URL}/message/send`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        "idEmetteur": user.id,
        "idDestinataire": 2,
        "typeDestinataire": "user",
        "texte": this.messages,
      }),
    });
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={user.id}
    />
  );
};

export default ChatGroupSreen;

