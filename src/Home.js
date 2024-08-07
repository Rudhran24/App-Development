import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Home = () => {
  const ceos = [
    { name: "CEO 1", description: "Description 1", image: "/path/to/image1.jpg" },
    { name: "CEO 2", description: "Description 2", image: "/path/to/image2.jpg" },
    // Add more CEO data
  ];

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="ceos">
        {ceos.map((ceo, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={ceo.image} />
            <Card.Body>
              <Card.Title>{ceo.name}</Card.Title>
              <Card.Text>{ceo.description}</Card.Text>
              <Button variant="primary">Follow</Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
