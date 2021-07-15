import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

 const ChatGroupSreen = props => {
  const [messages, setMessages] = useState([]);


   let user = props.route.params;

   useEffect(() => {

     fetch(`http://localhost:5000/groupe/${user.id}/message`)
       .then((response) => response.json())
       .then((json) => setMessages(json))
       .catch((error) => console.error(error))
   }, []);

   console.log(messages)

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={user.id}
    />
  )
}

export default ChatGroupSreen;

