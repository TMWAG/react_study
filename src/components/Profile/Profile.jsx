import MyPosts from './MyPosts/MyPosts';
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src="https://www.borealcm.com/wp-content/uploads/2015/06/placeholderimg-1024x576.png" alt="pfp" />
      <div>ava + desc</div>
      <MyPosts/>
    </div>
  );
};

export default Profile;