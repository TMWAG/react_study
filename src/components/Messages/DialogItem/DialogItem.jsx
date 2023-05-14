import styles from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

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

export default DialogItem;