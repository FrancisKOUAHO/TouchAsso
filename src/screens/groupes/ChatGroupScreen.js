import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const API_URL = Platform.OS === "ios" ? "https://api-touch-assso.herokuapp.com" : "https://api-touch-assso.herokuapp.com";


const ChatGroupSreen = props => {
  const [messages, setMessages] = useState([]);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  let user = props.route.params;


  useEffect(() => {
    fetch(`${API_URL}/groupe/${user.id}/message`)
      .then((response) => response.json())
      .then((json) => setMessages(json))
      .catch((error) => error);
  }, []);

  const onSend = useCallback((messages = []) => {
    const userSendMessage = {
      idEmetteur: 2,
      idDestinataire: 1,
      typeDestinataire: "groupe",
      texte: messages[0].text,
    };
    fetch(`${API_URL}/message/send`, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(userSendMessage),
    })
      .then(async res => {
        try {
          const jsonRes = await res.json();
          if (res.status !== 200) {
            setIsError(true);
            setMessage(jsonRes.message);
          } else {
            setIsError(false);
            setMessage(jsonRes.message);
          }
        } catch (err) {
          console.log(err);
        }
        ;
      })
      .catch(err => {
        console.log(err);
      });
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => {
          onSend(messages)
        }}
        user={{
          _id: 1,
          avatar: 'https://placeimg.com/140/140/any'
        }}
      />
    </>

  );
};

export default ChatGroupSreen;

