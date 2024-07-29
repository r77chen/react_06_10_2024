import { render } from "@testing-library/react";
import Post from ".";

const mockPost = {
  id: 1,
  title: "a random post",
  body: "very random",
};

describe("Post", () => {
  test("renders Post component", async () => {
    const { findByText } = render(<Post id={1} />);

    // this is wrong
    // you should stub the fetch call
    // options: jest.mock, jest.spyOn, fetch-mock, MSW
        const title =
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";
    const body =
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto";
    expect(await findByText(title)).toBeInTheDocument();
    expect(await findByText(body)).toBeInTheDocument();
  });
});
