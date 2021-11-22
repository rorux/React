import { render, screen } from "@testing-library/react";
import Message from "../Message";

test("Test Message component", () => {
  const message = { text: "Привет", author: "Иван", messageId: 123 };
  render(<Message message={message} />);

  const authorName = screen.getByText(/Иван/i);
  expect(authorName).toBeInTheDocument();

  const text = screen.getByText(/Привет/i);
  expect(text).toBeInTheDocument();
});
