import React, { useState, useContext, useCallback } from "react";

import { fetchAllPosts, fetchPost } from "apiCalls";
import PostProps from "components/Post/index.types";

interface ctxProps {
  posts: Resource<PostProps[]>;
  viewingPost: Resource<PostProps | null>;
  setViewingPost: React.Dispatch<
    React.SetStateAction<Resource<PostProps | null>>
  >;
  loadAllPosts: () => void;
  loadPost: (postId: string) => void;
}

interface Resource<T> {
  data: T;
  loading: boolean;
  errorLoading: string;
}

const PostsContext = React.createContext<ctxProps>({
  posts: { data: [], loading: false, errorLoading: "" },
  viewingPost: { data: null, loading: false, errorLoading: "" },
  setViewingPost: () => {},
  loadAllPosts: () => {},
  loadPost: () => {},
});

export const PostsContextProvider = ({ children }: any) => {
  const [posts, setPosts] = useState<Resource<PostProps[]>>({
    data: [],
    loading: false,
    errorLoading: "",
  });
  const [viewingPost, setViewingPost] = useState<Resource<PostProps | null>>({
    data: null,
    loading: false,
    errorLoading: "",
  });

  const loadAllPosts = useCallback(async () => {
    setPosts((posts) => ({ ...posts, loading: true, errorLoading: "" }));
    try {
      const posts = await fetchAllPosts();
      setPosts({ data: posts, loading: false, errorLoading: "" });
    } catch (e) {
      setPosts({
        data: [],
        loading: false,
        errorLoading: "Something went wrong with fetching all posts.",
      });
    }
  }, [setPosts]);

  const tryToFindPostAmongFetchedPosts = (
    postId: string
  ): undefined | PostProps => {
    const alreadyFetchedPost = posts.data.find(
      (post) => post.id.toString() === postId
    );

    return alreadyFetchedPost;
  };

  const loadPost = async (postId: string) => {
    setViewingPost((post) => ({ ...post, loading: true, errorLoading: "" }));

    const alreadyFetchedPost = tryToFindPostAmongFetchedPosts(postId);

    if (!!alreadyFetchedPost) {
      setViewingPost({
        data: alreadyFetchedPost,
        loading: false,
        errorLoading: "",
      });
      return;
    }

    try {
      const post = await fetchPost(postId);
      setViewingPost({ data: post, loading: false, errorLoading: "" });
    } catch (e) {
      setViewingPost({
        data: null,
        loading: false,
        errorLoading: "Something went wrong with fetching this post.",
      });
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        viewingPost,
        setViewingPost,
        loadAllPosts,
        loadPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export const usePostsContext = () => useContext(PostsContext);
