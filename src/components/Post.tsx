import { FormEvent, useState, ChangeEvent, InvalidEvent } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

interface PostProps {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: "paragraph" | "link";
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const publishedDateFormatted = format(publishedAt, "d LLLL 'at' HH:mm' h'");
  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    addSuffix: true,
  });
  const [comments, setComments] = useState(["Nice post!"]);
  const [newCommentText, setNewCommentText] = useState("");
  const isNewCommentEmpty = newCommentText.length === 0;

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeletedOne);
  }

  function handleNewInvalidMessage(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("please, leave your comment first");
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((aContent) => {
          if (aContent.type === "paragraph") {
            return <p key={aContent.content}>{aContent.content}</p>;
          } else if (aContent.type === "link") {
            return (
              <p key={aContent.content}>
                <a href="">{aContent.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Give your feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a comment here"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewInvalidMessage}
          required
        ></textarea>

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comment
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
