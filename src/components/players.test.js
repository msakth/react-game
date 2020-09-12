import React from "react";
import { render, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom";
import Players from "./players";

const renderComponent = (args) => {
  const defaultProps = {
    players: [
      {
        first_name: "foo",
        images: {
          default: {
            url: "sample image1",
          },
        },
        fppg: 24.55,
        id: "ID-111",
      },
      {
        first_name: "bar",
        images: {
          default: {
            url: "sample image2",
          },
        },
        fppg: 2.55,
        id: "ID-222",
      },
    ],
  };
  const props = { ...defaultProps, ...args };

  return render(<Players {...props} />);
};

describe("src/components/players", () => {
  it("renders players component", async () => {
    const { getByText } = renderComponent();

    await waitForElement(() => getByText(/foo/i));
  });

  it("renders multiple players", () => {
    const { getAllByText } = renderComponent();

    expect(getAllByText(/Guess/i)).toHaveLength(2);
  });
});
