import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/profile" className={navData => navData.isActive ? styles.active : ''} >
        <div className={styles.item}>
          <span>Profile</span> 
        </div>
      </NavLink>
      <NavLink to="/messages" className={navData => navData.isActive ? styles.active : ''}>
        <div className={styles.item}>
          Messages
        </div>
      </NavLink>
      <NavLink to="/users" className={navData => navData.isActive ? styles.active : ''}>
        <div className={styles.item}>
          Users
        </div>
      </NavLink>
      <NavLink to="/news" className={navData => navData.isActive ? styles.active : ''}>
        <div className={styles.item}>
          News
        </div>
      </NavLink>
      <NavLink to="/music" className={navData => navData.isActive ? styles.active : ''}>
        <div className={styles.item}>
          Music
        </div>
      </NavLink>
      <NavLink to="/settings" className={navData => navData.isActive ? styles.active : ''}>
        <div className={styles.item}>
          Settings
        </div>
      </NavLink>
    </nav>
  );
};

export default Navbar;