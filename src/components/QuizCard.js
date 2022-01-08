import React from 'react';
import Card from 'react-bootstrap/Card';

function quizCard() {
  return (
    <Card border='dark' style={{ width: '18rem' }}>
      <Card.Header>
        <Card.Title>Dark Card Title</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default quizCard;
