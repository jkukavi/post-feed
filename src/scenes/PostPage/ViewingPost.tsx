import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader";

import Post from "components/Post";
import { usePostsContext } from "contexts/PostsContext";

const ViewingPost = ({ propsMessage }: { propsMessage: string }) => {
  console.log(propsMessage + "ViewingPost");
  const params = useParams<{ postId: string }>();
  const { viewingPost, loadPost } = usePostsContext();

  useEffect(() => {
    loadPost(params.postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (viewingPost.loading) return <Loader propsMessage={propsMessage} />;

  if (viewingPost.errorLoading) return <h1>{viewingPost.errorLoading}</h1>;

  if (!viewingPost.data) return <h1>{"Resource seems unavaible."}</h1>;

  return (
    <Post post={viewingPost.data} propsMessage={propsMessage} expanded={true} />
  );
};

export default ViewingPost;
