import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  const state = props.store.getState();
  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  };
  const onMessageSend = () => {
    props.store.dispatch(sendMessageActionCreator());
  };
  const dialogs = state.messagesPage.dialogs;
  const messages = state.messagesPage.messages;

  return <Messages
    dialogs={dialogs}
    messages={messages}
    onMessageChange={onMessageChange}
    onMessageSend={onMessageSend}
    newMessageText={state.messagesPage.newMessageText}
  />
};

export default MessagesContainer;