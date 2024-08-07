// src/components/CEOs.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing CEO images
import SundarPichaiImg from './images/Sundar-Pichai.jpg'; // Google
import NatarajanChandrasekaranImg from './images/Chandrasekar.jpg'; // Tata
import ElonMuskImg from './images/Elon-Musk.jpg'; // Tesla
import SridharVembuImg from './images/Sridhar-Vembu.jpg'; // Zoho
import SatyaNadellaImg from './images/Satya-Nadella.jpg'; // Microsoft
import AndyJassyImg from './images/Andy-Jassy.jpg'; // Amazon
import KalyanKrishnamurthyImg from './images/Kalyan-Krishnamurthy.jpg'; // Flipkart
import TimCookImg from './images/Tim-Cook.jpg'; // Apple
import MarkZuckerbergImg from './images/Mark-Zuckerberg.jpg'; // Facebook
import ArvindKrishnaImg from './images/Arvind-Krishna.png'; // IBM
import PatGelsingerImg from './images/Pat-Gelsinger.jpg'; // Intel
import SafraCatzImg from './images/Safra-Catz.jpg'; // Oracle
import marcBenioffImage from './images/Marc-Benioff.jpg';
import ChristianKleinImg from './images/Christian-Klein.png'; // SAP
import WillCathcartImg from './images/Will-Cathcart.jpg'; // WhatsApp

const ceos = [
  { name: 'Sundar Pichai', image: SundarPichaiImg },
  { name: 'Natarajan Chandrasekaran', image: NatarajanChandrasekaranImg },
  { name: 'Elon Musk', image: ElonMuskImg },
  { name: 'Sridhar Vembu', image: SridharVembuImg },
  { name: 'Satya Nadella', image: SatyaNadellaImg },
  { name: 'Andy Jassy', image: AndyJassyImg },
  { name: 'Kalyan Krishnamurthy', image: KalyanKrishnamurthyImg },
  { name: 'Tim Cook', image: TimCookImg },
  { name: 'Mark Zuckerberg', image: MarkZuckerbergImg },
  { name: 'Arvind Krishna', image: ArvindKrishnaImg },
  { name: 'Pat Gelsinger', image: PatGelsingerImg },
  { name: 'Safra Catz', image: SafraCatzImg },
  { name: 'Marc Benioff', image: marcBenioffImage },
  { name: 'Christian Klein', image: ChristianKleinImg },
  { name: 'Will Cathcart', image: WillCathcartImg }
];

const CEOs = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <h1>CEOs</h1>
      {ceos.map((ceo, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ceo.image} alt={ceo.name} />
          <Card.Body>
            <Card.Title>{ceo.name}</Card.Title>
            <Button variant="primary">Follow</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default CEOs;
