import { useState, useEffect, useCallback } from "react";
import { fetchAllPosts } from "apiCalls";
import PostProps from "components/Post/index.types";

const usePosts = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  const fetchPosts = useCallback(async () => {
    try {
      const posts = await fetchAllPosts();
      setPosts(posts);
    } catch (e) {
      alert("Something went wrong with fetching all posts.");
    }
  }, [setPosts]);

  useEffect(() => {
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return posts;
};

export default usePosts;
