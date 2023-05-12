import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a href="/#" className={styles.item}>
        <div>
          Profile
        </div>
      </a>
      <a href="/#" className={styles.item}>
        <div>
          Messages
        </div>
      </a>
      <a href="/#" className={styles.item}>
        <div>
          News
        </div>
      </a>
      <a href="/#" className={styles.item}>
        <div>
          Music
        </div>
      </a>
      <a href="/#" className={styles.item}>
        <div>
          Settings
        </div>
      </a>
    </nav>
  );
};

export default Navbar;