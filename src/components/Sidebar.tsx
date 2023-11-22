import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1610296669228-602fa827fc1f?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="img"
      ></img>
      <div className={styles.profile}>
      <Avatar src="https://media.licdn.com/dms/image/C4E03AQE2AmnSI0hM0Q/profile-displayphoto-shrink_800_800/0/1632096337874?e=1705536000&v=beta&t=59WfAAJyMzunXUg994zXDNoqd3CtWA7Zq6lqL059KQY"/>
        <strong>Marcela Rocha</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Edit profile</a>
      </footer>
    </aside>
  );
}
