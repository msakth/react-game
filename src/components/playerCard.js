import React from "react";
import PropTypes from "prop-types";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const PlayerCard = (props) => {
  const { name, imgSrc, fppg, id, onSelectPlayer, disableSelectButton } = props;

  const handleClick = () => {
    onSelectPlayer(id, fppg);
  };

  return (
    <Card className="text-center" style={{ width: "18rem" }}>
      <Card.Img variant="top" data-testid="player-image" src={imgSrc} />
      <Card.Body>
        <Card.Title data-testid="player-name">{name}</Card.Title>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          data-testid="button"
          onClick={handleClick}
          disabled={disableSelectButton}
        >
          Guess
        </Button>
      </Card.Footer>
    </Card>
  );
};

PlayerCard.propTypes = {
  name: PropTypes.string,
  imgSrc: PropTypes.string,
  id: PropTypes.string,
  fppg: PropTypes.number,
  onSelectPlayer: PropTypes.func,
  disableSelectButton: PropTypes.bool,
};

export default PlayerCard;
