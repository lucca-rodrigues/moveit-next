import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://avatars.githubusercontent.com/u/61567726?s=460&u=b7b9d50454f77746648dd12fdeb805fbf29d86cc&v=4" alt="Bela Toledo"/>
      <div>
        <strong>Bela Toledo</strong>
        <p> <img src="icons/level.svg" alt=""/> 
        Level 1
        </p>
      </div>
    </div>
  );
}