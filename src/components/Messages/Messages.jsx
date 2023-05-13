import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css';

const DialogItem = (props) => {
  return (
    <NavLink to={`/messages/${props.userId}`}>
      <div className={styles.dialog}>
        <img src={props.profilePicture} alt={props.userName} className={styles.dialogPicture} />
        {props.userName}
      </div>
    </NavLink>
  );
}; 

const MessageItem = (props) => {
  return (
    <div className={styles.message}>
      {props.message}
    </div>
  );
};

const Messages = () => {
  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        <DialogItem
          userId='1' 
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' 
          userName='Dima' 
        />
        <DialogItem
          userId='2'
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg'
          userName='Andrew'
        />
        <DialogItem
          userId='3'
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg'
          userName='Sasha'
        />
        <DialogItem
          userId='4'
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg'
          userName='Ira'
        />
        <DialogItem
          userId='5'
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg'
          userName='Victor'
        />
        <DialogItem
          userId='6'
          profilePicture='https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg'
          userName='Slava'
        />
      </div>
      <div className={styles.messages}>
        <MessageItem message='Hello' />
        <MessageItem message='I' />
        <MessageItem message='Am' />
        <MessageItem message='gnome' />
        <MessageItem message='and you been gnomed' />
      </div>
    </div>
  );
};

export default Messages;