import Post from "components/Post";
import PostProps from "components/Post/index.types";
import ShowMore from "HOCs/ShowMore";

const Posts = ({
  posts,
  createPostClickHandler,
  propsMessage,
}: {
  posts: PostProps[];
  createPostClickHandler: any;
  propsMessage: string;
}) => {
  console.log(propsMessage + "Posts");

  return (
    <div className="postsContainer">
      <ShowMore data={posts} increment={5} propsMessage={propsMessage}>
        {({ item }) => (
          <Post
            key={item.id}
            post={item}
            handleClick={createPostClickHandler(item)}
            propsMessage={propsMessage}
          />
        )}
      </ShowMore>
    </div>
  );
};

export default Posts;
