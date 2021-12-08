import deepQuery from "../deepQuery";

const dummyObject = {
  prop: "hej",
  deepProp: {
    deepProp: {
      deepProp: {
        deepProp: { deepProp: { deepProp: { deepProp: "apple" } } },
      },
    },
  },
};

const dummyObject2 = {
  prop: "hej",
  deepProp: {
    deepProp: {
      deepProp: {
        deepProp: { deepProp: { deepProp: { deepProp: "apple" } } },
      },
      deepProp2: [{ deepProp: [{ deepProp: ["apple"] }] }],
    },
  },
};

const dummyObject3 = {
  prop: "hej",
  deepProp: {
    deepProp: {
      deepProp: {
        deepProp: { deepProp: { deepProp: { deepProp: "apple" } } },
      },
      deepProp2: [{ deepProp: [{ deepProp: [{ prop: "apple" }] }] }],
    },
  },
};

it("should return true if object contains keyword", () => {
  expect(deepQuery(dummyObject, "apple")).toBe(true);
  expect(deepQuery(dummyObject2, "apple")).toBe(true);
  expect(deepQuery(dummyObject3, "apple")).toBe(true);
});

it("should return false if object doesn't contains keyword", () => {
  expect(deepQuery(dummyObject, "pineapple")).toBe(false);
  expect(deepQuery(dummyObject2, "lex")).toBe(false);
  expect(deepQuery(dummyObject3, "lex")).toBe(false);
});
