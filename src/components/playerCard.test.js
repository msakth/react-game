import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import PlayerCard from "./playerCard";

const renderComponent = (args) => {
  const defaultProps = { name: "foo" };
  const props = { ...defaultProps, ...args };

  return render(<PlayerCard {...props} />);
};

describe("src/components/playerCard", () => {
  it("renders playerCard component", async () => {
    const { getByText, getByTestId } = renderComponent();

    await waitForElement(() => getByText(/foo/i));
    expect(getByTestId("player-name")).toBeInTheDocument();
  });

  it("button disbaled when disableSelectButton prop is true", () => {
    const { getByTestId } = renderComponent({ disableSelectButton: true });

    expect(getByTestId("button")).toBeDisabled();
  });

  it("onSelectPlayer callback fires with arguments", () => {
    const onClick = jest.fn();
    const params = ["ID-111", 15.55];
    const { getByText } = renderComponent({
      onSelectPlayer: onClick,
      id: params[0],
      fppg: params[1],
    });

    fireEvent.click(getByText(/Guess/i));

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledWith(...params);
  });

  it("renders player image", () => {
    const { getByTestId } = renderComponent({ imgSrc: "image" });
    expect(getByTestId("player-image")).toBeInTheDocument();
  });
});
