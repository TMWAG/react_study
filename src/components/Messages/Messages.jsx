import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import styles from './Messages.module.css';
import SendMessageArea from './SendMessageArea/SendMessageArea';

const Messages = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem userId={dialog.userId} userName={dialog.userName} profilePicture={dialog.profilePicture} />);
  let messagesElements = props.state.messages.map((message) => <MessageItem message={message.message} />)

  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
        <SendMessageArea newMessageText={props.state.newMessageText} dispatch={props.dispatch}/>
      </div>
    </div>
  );
};

export default Messages;