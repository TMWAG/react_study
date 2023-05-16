import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/messages-reducer";
import Messages from "./Messages";

const mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
    newMessageText: state.messagesPage.newMessageText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    onMessageSend: () => {
      dispatch(sendMessageActionCreator());
    },
  };
};

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;