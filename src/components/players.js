import React from "react";
import { PropTypes } from "prop-types";

import PlayerCard from "./playerCard";

const Players = (props) => {
  const { players, onSelectPlayer, disableSelectButton } = props;

  return (
    <>
      {players &&
        players.map((player) => (
          <PlayerCard
            key={player.id}
            name={player.first_name}
            imgSrc={player.images.default.url}
            fppg={player.fppg}
            id={player.id}
            onSelectPlayer={onSelectPlayer}
            disableSelectButton={disableSelectButton}
          />
        ))}
    </>
  );
};

Players.propTypes = {
  players: PropTypes.array,
  onSelectPlayer: PropTypes.func,
  disableSelectButton: PropTypes.bool,
};

export default Players;
