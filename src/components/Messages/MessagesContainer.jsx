import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import StoreContext from "../../store-context";
import Messages from "./Messages";

const MessagesContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const state = store.getState();
        const onMessageChange = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        };
        const onMessageSend = () => {
          store.dispatch(sendMessageActionCreator());
        };
        const dialogs = state.messagesPage.dialogs;
        const messages = state.messagesPage.messages;
        return (
          <Messages
            dialogs={dialogs}
            messages={messages}
            onMessageChange={onMessageChange}
            onMessageSend={onMessageSend}
            newMessageText={state.messagesPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MessagesContainer;