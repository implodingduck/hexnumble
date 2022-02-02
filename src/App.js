import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';

function App() {

  const randomInteger = () => {
    return Math.floor(Math.random() * 15) + 1;
  }

  const [answers] = React.useState([
    randomInteger(),
    randomInteger(),
    randomInteger(),
    randomInteger(),
    randomInteger(),
    randomInteger() 
  ])
  const [guesses, setGuesses] = React.useState({
    "a": "",
    "b": "",
    "c": "",
    "x": "",
    "y": "",
    "z": "",
  })


  const handleSetGuesses = (e) => {
    console.log(e)
    console.log(e.target.getAttribute("data-index"))
    const i = e.target.getAttribute("data-index")
    const newGuesses = JSON.parse(JSON.stringify(guesses))
    newGuesses[i] = parseInt(e.target.value) || parseInt(e.target.value, 16) || 0
    console.log(newGuesses)
    setGuesses(newGuesses)
  }

  const handleCheck = (e) => {
    let result = guesses.a == answers[0]
    result = result && (guesses.b == answers[1])
    result = result && (guesses.c == answers[2])
    result = result && (guesses.x == answers[3])
    result = result && (guesses.y == answers[4])
    result = result && (guesses.z == answers[5])
    alert(result)
  }

  const a = answers[0];
  const b = answers[1];
  const c = answers[2];
  const x = answers[3];
  const y = answers[4];
  const z = answers[5];

  return (
    

    <div className="App">
      <Container>
        <Row>
          <Col></Col>
          <Col><input type="text" className="guess" data-index="a" value={guesses.a} onChange={handleSetGuesses} /></Col>
          <Col>{ a * b }</Col>
          <Col><input type="text" className="guess" data-index="b" value={guesses.b} onChange={handleSetGuesses}  /></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col>{ c * a}</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>{ b * x}</Col>
        </Row>
        <Row>
          <Col><input type="text" className="guess" data-index="c" value={guesses.c} onChange={handleSetGuesses} /></Col>
          <Col></Col>
          <Col> { a + b + c + x + y + z } </Col>
          <Col></Col>
          <Col><input type="text" className="guess" data-index="x" value={guesses.x} onChange={handleSetGuesses}  /></Col>
        </Row>
        <Row>
          <Col>{y * c}</Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col>{ x * z }</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col><input type="text" className="guess" data-index="y" value={guesses.y} onChange={handleSetGuesses}  /></Col>
          <Col>{ y * z } </Col>
          <Col><input type="text" className="guess" data-index="z" value={guesses.z} onChange={handleSetGuesses}  /></Col>
          <Col></Col>
        </Row>
        <Row>
          <Col><Button onClick={handleCheck}>Check!</Button></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
