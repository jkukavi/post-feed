import PostProps from "components/Post/index.types";

const baseUrl = "https://jsonplaceholder.typicode.com";
const postsBaseUrl = baseUrl + "/posts/";
const defaultQueryString = "?_embed=comments&_expand=user&_sort=title";

export const fetchAllPosts = async (): Promise<PostProps[]> => {
  const rawPosts = await fetch(postsBaseUrl + defaultQueryString);

  const posts: PostProps[] = await rawPosts.json();
  return posts;
};

export const fetchPost = async (postId: string) => {
  const rawPosts = await fetch(postsBaseUrl + postId + defaultQueryString);

  const post: PostProps = await rawPosts.json();
  return post;
};

export const fetchPostsByUserDataQuery = async (query: string) => {
  const rawPosts = await fetch(
    postsBaseUrl + defaultQueryString + `&q=${query}`
  );

  const posts: PostProps = await rawPosts.json();
  return posts;
};
