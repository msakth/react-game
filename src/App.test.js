import React from "react";
import { render, waitForElement } from "@testing-library/react";
import App from "./App";

test("renders App component", async () => {
  const { getByText } = render(<App />);
  await waitForElement(() => getByText(/Guess the player with highest FPPG/i));
});
