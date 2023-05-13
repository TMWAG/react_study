import styles from './Messages.module.css';

const Messages = () => {
  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        <div className={styles.dialog}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Dima" />
          Dima
        </div>
        <div className={styles.dialog}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Andrew" />
          Andrew
        </div>
        <div className={styles.dialog}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Sasha" />
          Sasha
        </div>
        <div className={styles.dialog}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Ira" />
          Ira
        </div>
        <div className={styles.dialog}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Victor" />
          Victor
        </div>
        <div className={styles.dialog + ' ' + styles.active}>
          <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Slava" />
          Slava
        </div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>
          Hello
        </div>
        <div className={styles.message}>
          I
        </div>
        <div className={styles.message}>
          Am
        </div>
        <div className={styles.message}>
          gnome
        </div>
        <div className={styles.message}>
          and you been gnomed
        </div>
      </div>
    </div>
  );
};

export default Messages;