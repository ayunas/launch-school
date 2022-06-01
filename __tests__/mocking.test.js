

test("mock implementation", () => {

  const mock = jest.fn(() => "bar");
  expect(mock("foo")).toBe("bar");
  expect(mock).toHaveBeenCalledWith("foo");


})