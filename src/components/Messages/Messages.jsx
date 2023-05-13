import { NavLink } from 'react-router-dom';
import styles from './Messages.module.css';

const Messages = () => {
  return (
    <div className={styles.dialogsBox}>
      <div className={styles.dialogsItems}>
        <NavLink to='/dialogs/1'>
          <div className={styles.dialog}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Dima" className={styles.dialogPicture} />
            Dima
          </div>
        </NavLink>
        <NavLink to='/dialogs/2'>
          <div className={styles.dialog}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Andrew" className={styles.dialogPicture} />
            Andrew
          </div>
        </NavLink>
        <NavLink to='/dialogs/3'>
          <div className={styles.dialog}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Sasha" className={styles.dialogPicture} />
            Sasha
          </div>
        </NavLink>
        <NavLink to='/dialogs/4'>
          <div className={styles.dialog}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Ira" className={styles.dialogPicture} />
            Ira
          </div>
        </NavLink>
        <NavLink to='/dialogs/5'>
          <div className={styles.dialog}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Victor" className={styles.dialogPicture} />
            Victor
          </div>
        </NavLink>
        <NavLink to='/dialogs/'>
          <div className={styles.dialog + ' ' + styles.active}>
            <img src="https://mulinecxc.ru/wp-content/uploads/2020/08/106400558.jpg" alt="Slava" className={styles.dialogPicture} />
            Slava
          </div>
        </NavLink>

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