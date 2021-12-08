import "./index.css";
import CommentProps from "./index.types";

const Comment = ({
  comment,
  propsMessage,
}: {
  comment: CommentProps;
  propsMessage?: string;
}) => {
  console.log(propsMessage + "Comment");
  return (
    <div className="comment">
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      <p>
        <b>{comment.email}</b>
      </p>
    </div>
  );
};

export default Comment;
