import { render } from "@testing-library/react";

import ShowMe from "../ShowMe";

it("should hide the element if initially shown is false", () => {
  const { queryByText } = render(
    <ShowMe initiallyShown={false} showMeButtonText="someText">
      <p>{"Don't show me"}</p>
    </ShowMe>
  );

  const element = queryByText("Don't show me");

  expect(element).toBeFalsy();
});

it("should show the element if initially shown is true", () => {
  const { queryByText } = render(
    <ShowMe initiallyShown={true} showMeButtonText="someText">
      <p>{"Do show me"}</p>
    </ShowMe>
  );

  const element = queryByText("Do show me");

  expect(element).toBeTruthy();
});
