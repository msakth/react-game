import PlayerReducer from "./playerReducer";
import * as playerActions from "../actionCreators/playersActionCreator";

describe("src/redux/playerReducer", () => {
  const initialState = {
    players: [{ first_name: "foo" }, { first_name: "bar" }],
    isLoading: false,
  };
  const url = "http://url";

  it("should return isLoading true when initializing fetch ", () => {
    const action = playerActions.fetchPlayers(url);
    const state = PlayerReducer(initialState, action);

    expect(state.isLoading).toBeTruthy();
  });

  it("should return players when fetch success", () => {
    const action = playerActions.fetchSuccess(initialState.players);
    const state = PlayerReducer(initialState, action);

    expect(state.players).toHaveLength(2);
    expect(state.isLoading).toBeFalsy();
    expect(state.errorMessage).toBe("");
  });

  it("should fail when fetch fails", () => {
    const errorMessage = "dummy error message";
    const action = playerActions.fetchFailure(errorMessage);
    const state = PlayerReducer(initialState, action);

    expect(state.errorMessage).toBe(errorMessage);
    expect(state.isLoading).toBeFalsy();
    expect(state.isError).toBeTruthy();
  });
});
