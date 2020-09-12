import ShuffleReducer from "./shuffleReducer";
import * as shuffleActions from "../actionCreators/shuffleActionCreator";

describe("src/redux/shuffleReducer", () => {
  const initialState = {
    shuffledPlayers: [{ first_name: "foo" }, { first_name: "bar" }],
    isLoading: false,
  };

  it("should return isLoading true when initializing shuffle ", () => {
    const action = shuffleActions.shufflePlayers(initialState.shuffledPlayers);
    const state = ShuffleReducer(initialState, action);

    expect(state.isLoading).toBeTruthy();
  });

  it("should return shuffled players when shuffle success", () => {
    const action = shuffleActions.shuffleSuccess(initialState.shuffledPlayers);
    const state = ShuffleReducer(initialState, action);

    expect(state.shuffledPlayers).toHaveLength(2);
    expect(state.isLoading).toBeFalsy();
    expect(state.errorMessage).toBe("");
  });

  it("should fail when shuffle fails", () => {
    const errorMessage = "dummy error message";
    const action = shuffleActions.shuffleFailure(errorMessage);
    const state = ShuffleReducer(initialState, action);

    expect(state.errorMessage).toBe(errorMessage);
    expect(state.isLoading).toBeFalsy();
    expect(state.isError).toBeTruthy();
  });
});
