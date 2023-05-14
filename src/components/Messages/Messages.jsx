import MessageItem from './MessageItem/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import styles from './Messages.module.css';

const Messages = () => {
  let dialogsData = [
    { userId: 1, userName: 'Dima', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 2, userName: 'Anderew', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 3, userName: 'Sasha', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 4, userName: 'Ira', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 5, userName: 'Victor', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
    { userId: 6, userName: 'Slava', profilePicture: 'https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg' },
  ];
  
  let dialogsElements = dialogsData.map((dialog) => <DialogItem userId={dialog.userId} userName={dialog.userName} profilePicture={dialog.profilePicture} />);

  let messagesData = [
    { id: 1, message: 'Hello' },
    { id: 2, message: 'I' },
    { id: 3, message: 'Am' },
    { id: 4, message: 'Gnome' },
    { id: 5, message: 'And you been gnoomed' },
  ];

  let messagesElements = messagesData.map((message) => <MessageItem message={message.message} />)

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