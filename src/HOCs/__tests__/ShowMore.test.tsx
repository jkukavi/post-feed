import { fireEvent, render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import ShowMore from "../ShowMore";

const DummyDiv = () => {
  return <div data-testid="dummyDiv"></div>;
};

it("should show elements at first render", () => {
  const array = new Array(20).fill(0);

  const { queryAllByTestId } = render(
    <ShowMore data={array} increment={2}>
      {() => <DummyDiv />}
    </ShowMore>
  );

  const elements = queryAllByTestId("dummyDiv");

  expect(elements.length).toBe(2);
});

it("should show more elements when asked", async () => {
  await act(async () => {
    const array = new Array(20).fill(0);

    const { findByTestId, findAllByTestId } = render(
      <ShowMore data={array} increment={2}>
        {() => <DummyDiv />}
      </ShowMore>
    );

    const button = await findByTestId("show-button");

    fireEvent.click(button);

    const shownElements = await findAllByTestId("dummyDiv");

    expect(shownElements.length).toBe(4);
  });
});
