import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResultsCard from "./resultsCard";

const renderComponent = (args) => {
  const defaultProps = { score: 6 };
  const props = { ...defaultProps, ...args };

  return render(<ResultsCard {...props} />);
};

describe("src/components/resultsCard", () => {
  it("renders resultsCard component", async () => {
    const { getByText } = renderComponent();

    await waitForElement(() => getByText(/Your current score is : 6/i));
  });

  it("callback fires on onClick", () => {
    const onClick = jest.fn();
    const { getByText } = renderComponent({
      onNewGame: onClick,
      buttonMessage: "Try Again",
    });

    fireEvent.click(getByText(/Try Again/i));

    expect(onClick).toHaveBeenCalled();
  });

  it("renders header message", async () => {
    const { getByText, getByTestId } = renderComponent({
      headerMessage: "header message",
    });

    await waitForElement(() => getByText(/header message/i));

    expect(getByTestId("headerMessage")).toBeInTheDocument();
  });

  it("renders status message", async () => {
    const { getByText, getByTestId } = renderComponent({
      statusMessage: "status message",
    });

    await waitForElement(() => getByText(/status message/i));

    expect(getByTestId("statusMessage")).toBeInTheDocument();
  });
});
