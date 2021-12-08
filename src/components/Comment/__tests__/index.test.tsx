import { render } from "@testing-library/react";

import Comment from "../index";
import CommentProps from "../index.types";

const comment: CommentProps = {
  body: "bla",
  email: "bla@company.com",
  id: 1,
  name: "Ivanka",
  postId: 2,
};

it("should render body and email on screen", () => {
  const { getByText } = render(<Comment comment={comment} />);

  const body = getByText(comment.body);
  const email = getByText(comment.email);

  expect(body).toBeTruthy();
  expect(email).toBeTruthy();
});
