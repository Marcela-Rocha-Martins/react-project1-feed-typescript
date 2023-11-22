import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [applauseCount, setApplauseCount] = useState(2);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleApplauseComment() {
    setApplauseCount(applauseCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://media.licdn.com/dms/image/C4E03AQE2AmnSI0hM0Q/profile-displayphoto-shrink_800_800/0/1632096337874?e=1705536000&v=beta&t=59WfAAJyMzunXUg994zXDNoqd3CtWA7Zq6lqL059KQY"
        
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Marcela Rocha</strong>
              <time title="11 de maio às 08h13" dateTime="2022-05-11 08:13:38">
                cerca de 1h atrás
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete Comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp />
            Applause<span>{applauseCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
