import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/profile" className={styles.item}>
        <div>
          Profile
        </div>
      </NavLink>
      <NavLink to="/messages" className={styles.item}>
        <div>
          Messages
        </div>
      </NavLink>
      <NavLink to="/news" className={styles.item}>
        <div>
          News
        </div>
      </NavLink>
      <NavLink to="/music" className={styles.item}>
        <div>
          Music
        </div>
      </NavLink>
      <NavLink to="/settings" className={styles.item}>
        <div>
          Settings
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;