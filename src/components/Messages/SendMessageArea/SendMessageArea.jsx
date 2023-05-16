import styles from './SendMessageArea.module.css';

const SendMessageArea = (props) => {
  const onMessageChange = (e) => {
    props.onMessageChange(e.target.value);
  };
  const sendMessage = () => {
    props.onMessageSend();
  };
  
  return (
    <div className={styles.area}>
      <textarea onChange={onMessageChange} value={props.newMessageText} />
      <button className={styles.button} onClick={sendMessage}>send</button>
    </div>
  );
}

export default SendMessageArea;