import { createRef } from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/state';
import styles from './SendMessageArea.module.css';

const SendMessageArea = (props) => {
  const newMessageElement = createRef();

  const onMessageChange = () => {
    props.dispatch(updateNewMessageTextActionCreator(newMessageElement.current.value));
  };
  const sendMessage = () => {
    props.dispatch(sendMessageActionCreator());
  };
  
  return (
    <div className={styles.area}>
      <textarea ref={newMessageElement} onChange={onMessageChange} value={props.newMessageText} />
      <button className={styles.button} onClick={sendMessage}>send</button>
    </div>
  );
}

export default SendMessageArea;