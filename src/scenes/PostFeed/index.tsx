import { useHistory } from "react-router-dom";

import PostProps from "components/Post/index.types";

import Loader from "components/Loader";
import FilterInput from "./FilterInput";
import Posts from "./Posts";

import nestedQuery from "utils/deepQuery";
import useFilterDataByQueryString from "hooks/useFilterDataByQueryString";
import useDebounce from "hooks/useDebounce";

import "./index.css";
import { usePostsContext } from "contexts/PostsContext";
import { useEffect } from "react";

const postsUserDataContainsQueryString = (
  post: PostProps,
  queryString: string
) => {
  return nestedQuery(post.user, queryString);
};

const PostFeed = ({ propsMessage }: { propsMessage: string }) => {
  console.log(propsMessage + "PostFeed");
  const history = useHistory();
  const { posts } = usePostsContext();

  useEffect(() => {
    posts.load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { setQueryString, filteredData, noSearchResultsFound } =
    useFilterDataByQueryString({
      data: posts.data,
      filterFunction: postsUserDataContainsQueryString,
    });

  const debouncedSetQueryString = useDebounce(setQueryString, 800);

  const goToPostPage = (post: PostProps) => {
    history.push("/post/" + post.id);
  };

  const createPostClickHandler = (post: PostProps) => () => {
    goToPostPage(post);
  };

  return (
    <>
      <FilterInput
        handleChange={(e: any) => {
          debouncedSetQueryString(e.target.value);
        }}
        propsMessage={propsMessage}
      />
      {posts.loading ? (
        <Loader propsMessage={propsMessage} />
      ) : (
        <Posts
          posts={filteredData}
          createPostClickHandler={createPostClickHandler}
          propsMessage={propsMessage}
        />
      )}
      {noSearchResultsFound && (
        <h1 style={{ textAlign: "center" }}>
          No posts found with the desired keyword.
        </h1>
      )}
      {posts.errorLoading && (
        <h1 style={{ margin: "auto" }}>{posts.errorLoading}</h1>
      )}
    </>
  );
};

export default PostFeed;
