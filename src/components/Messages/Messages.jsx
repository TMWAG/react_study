import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import styles from './Messages.module.css';
import SendMessageArea from './SendMessageArea/SendMessageArea';
import store from '../../redux/state';

const Messages = (props) => {
  let state = props.store.getState().messagesPage;
  let dialogsElements = state.dialogs.map((dialog) => <DialogItem userId={dialog.userId} userName={dialog.userName} profilePicture={dialog.profilePicture} />);
  let messagesElements = state.messages.map((message) => <MessageItem message={message.message} />)

  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        { dialogsElements }
      </div>
      <div className={styles.messages}>
        { messagesElements }
        <SendMessageArea newMessageText={state.newMessageText} dispatch={props.store.dispatch.bind(store)}/>
      </div>
    </div>
  );
};

export default Messages;