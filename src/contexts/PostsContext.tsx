import React, { useContext } from "react";

import { fetchAllPosts, fetchPost } from "apiCalls";
import PostProps from "components/Post/index.types";
import useResource from "hooks/useResource";

interface Resource<T> {
  data: T;
  loading: boolean;
  errorLoading: string;
}

interface LoadableResource<T> extends Resource<T> {
  load: (args?: any) => Promise<void>;
}
interface ctxProps {
  posts: LoadableResource<PostProps[]>;
  viewingPost: LoadableResource<PostProps | null>;
}

const PostsContext = React.createContext<ctxProps>({
  posts: {
    data: [],
    loading: false,
    errorLoading: "",
    load: async () => {},
  },
  viewingPost: {
    data: null,
    loading: false,
    errorLoading: "",
    load: async () => {},
  },
});

const tryToFindPostAmongFetchedPosts = (
  postId: string,
  posts: PostProps[]
): undefined | PostProps => {
  const alreadyFetchedPost = posts.find(
    (post) => post.id.toString() === postId
  );

  return alreadyFetchedPost;
};

export const PostsContextProvider = ({ children }: any) => {
  const posts = useResource(
    [],
    fetchAllPosts,
    "Something went wrong with fetching all posts."
  );

  const firstCheckIfFetchedThenFetch = async (postId: string) => {
    const alreadyFetched = tryToFindPostAmongFetchedPosts(postId, posts.data);
    if (alreadyFetched) return alreadyFetched;
    return await fetchPost(postId);
  };

  const viewingPost = useResource(
    null,
    firstCheckIfFetchedThenFetch,
    "Something went wrong with fetching this post."
  );

  return (
    <PostsContext.Provider
      value={{
        posts,
        viewingPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);
