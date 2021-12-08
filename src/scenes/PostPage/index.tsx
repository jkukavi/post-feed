import { NavLink } from "react-router-dom";

import ViewingPost from "./ViewingPost";

const PostPage = ({ propsMessage }: { propsMessage: string }) => {
  console.log(propsMessage + "PostPage");
  return (
    <>
      <NavLink to="/posts">Go back to posts</NavLink>
      <ViewingPost propsMessage={propsMessage} />
    </>
  );
};

export default PostPage;
