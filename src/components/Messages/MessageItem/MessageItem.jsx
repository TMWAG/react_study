import styles from './MessageItem.module.css';

const MessageItem = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  );
};

export default MessageItem;