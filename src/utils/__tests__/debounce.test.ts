import { debounce } from "../debounce";

const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

jest.setTimeout(30000);

it("should not execute function untill debounce timeout is met", async () => {
  let numberOfExecutions = 0;
  let interval;
  const func = () => {
    numberOfExecutions = numberOfExecutions + 1;
  };

  let debouncedFunction = debounce(func, 200);

  const interact = async () => {
    interval = setInterval(debouncedFunction, 10);
    await wait(100);
    clearInterval(interval);
    await wait(300);
  };

  await interact();
  await interact();
  await interact();

  expect(numberOfExecutions).toBe(3);
});
