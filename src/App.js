import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import Carousel from './components/Carousel';
import BigGrid from './components/BigGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />

      <Container>
        <Row>
          <Col xs={9} lg={6} className="mx-auto my-5">
            <p>LoremIpsum360 ° үнэ төлбөргүй онлайн генератор хуурамч текст юм. Энэ нь таны загварууд нь солих текст эсвэл өөр текст үүсгэхийн тулд иж бүрэн текст симулятор өгдөг. Энэ нь өөр өөр хэл дээр эх бичвэрийг жишээ бий болгох латин кирилл болон янз бүрийн санамсаргүй текстийг боломжуудтай байдаг.</p>
          </Col>
        </Row>
      </Container>

      <BigGrid />
    </div>
  );
}

export default App;
