import React from "react";
import PropTypes from "prop-types";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ResultsCard = (props) => {
  const {
    score,
    onNewGame,
    headerMessage,
    statusMessage,
    buttonMessage,
  } = props;

  return (
    <Card className="text-center" style={{ width: "52rem", marginTop: "2rem" }}>
      {headerMessage && (
        <Card.Header data-testid="headerMessage">{headerMessage}</Card.Header>
      )}
      {statusMessage && (
        <Card.Body>
          <Card.Title data-testid="statusMessage">{statusMessage}</Card.Title>
        </Card.Body>
      )}
      <Card.Body>
        <Card.Title>{`Your current score is : ${score}`}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Button variant="info" onClick={onNewGame}>
          {buttonMessage}
        </Button>
      </Card.Body>
    </Card>
  );
};

ResultsCard.propTypes = {
  score: PropTypes.number,
  onNewGame: PropTypes.func,
  headerMessage: PropTypes.string,
  statusMessage: PropTypes.string,
  buttonMessage: PropTypes.string,
};

export default ResultsCard;
