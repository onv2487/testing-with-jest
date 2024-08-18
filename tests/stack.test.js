const stack = require("../src/stack");

test("peek on empty stack returns undefined", () => {
  expect(stack.peek()).toBeUndefined();
});

test("peek on stack with one element returns that element", () => {
  stack.push(1);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(1);
});

test("pop on stack with multiple elements returns the top element and removes it", () => {
  stack.push(1);
  stack.push("testord123");
  stack.push(42);
  const poppedValue = stack.pop();
  expect(poppedValue).toBe(42);
  expect(stack.peek()).toBe("testord123");
});

test("push and peek with arrays as elements works correctly", () => {
  const arrayElement = ["ett", 23, "ord"];
  stack.push(arrayElement);
  expect(stack.peek()).toBe(arrayElement);
});

test("peek on stack with two or more elements returns the top element", () => {
  stack.push(1);
  stack.push("wow");
  stack.push(42);
  expect(stack.peek()).toBeDefined();
  expect(stack.peek()).toBe(42);
});
