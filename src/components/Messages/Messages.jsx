import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import styles from './Messages.module.css';

const Messages = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => <DialogItem userId={dialog.userId} userName={dialog.userName} profilePicture={dialog.profilePicture} />);
  let messagesElements = props.messagesData.map((message) => <MessageItem message={message.message} />)

  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
      </div>
    </div>
  );
};

export default Messages;