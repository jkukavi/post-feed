import Comment from "components/Comment";
import ShowMe from "HOCs/ShowMe";
import "./index.css";
import PostProps from "./index.types";

const Post = ({
  post,
  handleClick = () => {},
  expanded = false,
  propsMessage,
}: {
  post: PostProps;
  expanded?: boolean;
  handleClick?: any;
  propsMessage?: string;
}) => {
  console.log(propsMessage + "Post");
  return (
    <div className={`post ${expanded ? "expanded" : ""}`} onClick={handleClick}>
      <h3>{post.title}</h3>
      {expanded && <p>{post.body}</p>}
      <p>
        <b>{post.user.name}</b>
      </p>

      <ShowMe
        initiallyShown={expanded}
        showMeButtonText={`Show comments (${post.comments.length})`}
        propsMessage={propsMessage}
      >
        <>
          {post.comments.map((comment) => (
            <Comment
              key={comment.id}
              comment={comment}
              propsMessage={propsMessage}
            />
          ))}
        </>
      </ShowMe>
    </div>
  );
};

export default Post;
