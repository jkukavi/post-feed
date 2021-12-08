import CommentProps from "../Comment/index.types";

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
  user: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
  comments: CommentProps[];
}

export default PostProps;
