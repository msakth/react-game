import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, CardDeck } from "react-bootstrap";

import Players from "./players";
import { ACTION_TYPES } from "../redux/constants";
import ResultsCard from "../components/resultsCard";
import PlayerConfig from "../config";

function PlayersContainer(props) {
  const { players, shuffledPlayers, dispatch } = props;
  const url = PlayerConfig.sourceUrl;

  const [score, setScore] = useState(0);
  const [playerFPPG, setplayerFPPG] = useState();
  const [disableSelectButton, setDisableSelectButton] = useState(false);
  const [headerMessage, setHeaderMessage] = useState();
  const [statusMessage, setStatusMessage] = useState();
  const [buttonMessage, setButtonMessage] = useState();

  const onNewGame = () => {
    setDisableSelectButton(false);
    setplayerFPPG();
    setStatusMessage();
    score === 10 && setScore(0);
    players && dispatch({ type: ACTION_TYPES.PLAYERS_SHUFFLE_INIT, players });
  };

  const onSelectPlayer = (id, fppg) => {
    setDisableSelectButton(true);
    const highest_FPPG =
      shuffledPlayers &&
      Math.max(...shuffledPlayers.map((player) => player.fppg), 0);

    if (fppg === highest_FPPG) {
      setplayerFPPG(fppg);
      setScore(score + 1);
      setStatusMessage(`Guessed Correct - FPPG: ${fppg}`);
    } else {
      setStatusMessage(`Sorry Guessed Wrong - FPPG : ${fppg}`);
    }
  };

  useEffect(() => {
    dispatch({ type: ACTION_TYPES.PLAYERS_FETCH_INIT, url });
  }, [url, dispatch]);

  useEffect(() => {
    players && dispatch({ type: ACTION_TYPES.PLAYERS_SHUFFLE_INIT, players });
  }, [players, dispatch]);

  useEffect(() => {
    const latestScore = 10 - score;
    if (latestScore === 0) {
      setHeaderMessage("Hurray! - You Won this Game");
      setButtonMessage("Start Again");
    } else {
      setHeaderMessage(
        `You need to guess ${latestScore} more to win this game`
      );
      setButtonMessage("Lets Try Again");
    }
  }, [score]);

  return (
    shuffledPlayers && (
      <Container>
        <Row className="justify-content-lg-center">
          <h2>Guess the player with highest FPPG</h2>
        </Row>
        <Row>
          <CardDeck>
            <Players
              players={shuffledPlayers}
              onSelectPlayer={onSelectPlayer}
              disableSelectButton={disableSelectButton}
            ></Players>
          </CardDeck>
        </Row>
        <Row>
          <ResultsCard
            score={score}
            onNewGame={onNewGame}
            fppg={playerFPPG}
            headerMessage={headerMessage}
            statusMessage={statusMessage}
            buttonMessage={buttonMessage}
          ></ResultsCard>
        </Row>
      </Container>
    )
  );
}

const mapStateToProps = (state) => {
  const { players } = state.PlayerReducer;
  const { shuffledPlayers } = state.ShuffleReducer;

  return {
    players,
    shuffledPlayers,
  };
};

export default connect(mapStateToProps)(PlayersContainer);
