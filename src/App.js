import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

function App() {

  const generateRandomArray = () => {
    const array = new Uint32Array(6)
    crypto.getRandomValues(array);
    for (var i = 0; i < array.length; i++) { 
      array[i] = (array[i] % 16) + 1
    }
    return array
  }

  const [answers] = React.useState(generateRandomArray())
  const [guesses, setGuesses] = React.useState({
    "a": "",
    "b": "",
    "c": "",
    "x": "",
    "y": "",
    "z": "",
  })

  const [show, setShow] = React.useState(false);
  const [howToPlay, setHowToPlay] = React.useState(false);
  const [resultVal, setResultVal] = React.useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleHowToPlayClose = () => setHowToPlay(false);
  const handleHowToPlayShow = () => setHowToPlay(true);

  const handleSetGuesses = (e) => {
    console.log(e)
    console.log(e.target.getAttribute("data-index"))
    const i = e.target.getAttribute("data-index")
    const newGuesses = JSON.parse(JSON.stringify(guesses))
    newGuesses[i] = parseInt(e.target.value) || parseInt(e.target.value, 16) || ''
    console.log(newGuesses)
    setGuesses(newGuesses)
  }

  const handleCheck = (e) => {
    let result = guesses.a === answers[0]
    result = result && (guesses.b === answers[1])
    result = result && (guesses.c === answers[2])
    result = result && (guesses.x === answers[3])
    result = result && (guesses.y === answers[4])
    result = result && (guesses.z === answers[5])
    setResultVal(result)
    handleShow()
  }

  const handlePlayAgain = (e) => {
    window.location.reload();
  }

  /* const hexValue = () => {
     let hex = '#'
     hex += (answers[0]-1).toString(16)
     hex += (answers[1]-1).toString(16)
     hex += (answers[2]-1).toString(16)
     hex += (answers[3]-1).toString(16)
     hex += (answers[4]-1).toString(16)
     hex += (answers[5]-1).toString(16)
     return hex;
  */ }

  const a = answers[0];
  const b = answers[1];
  const c = answers[2];
  const x = answers[3];
  const y = answers[4];
  const z = answers[5];

  return (
    <div className="App">
      <div style={{ maxWidth: "540px", margin: "auto" }}>
      <Container>
        <Row>
          <Col xs={{ offset: 0, span: 12}}><h1>Hexnumble</h1></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 2, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="a" value={guesses.a} onChange={handleSetGuesses} /></Col>
          <Col xs={{ offset: 0, span: 4}}>{ a * b }</Col>
          <Col xs={{ offset: 0, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="b" value={guesses.b} onChange={handleSetGuesses}  /></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 2}}>{ c * a}</Col>
          <Col xs={{ offset: 0, span: 6}}>
          {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"  viewbox="0 0 200 173.20508075688772" preserveAspectRatio='none'><path fill="#3cc6b2" d="M0 86.60254037844386L50 0L150 0L200 86.60254037844386L150 173.20508075688772L50 173.20508075688772Z"></path></svg> */}
          
          </Col>
          <Col xs={{ offset: 0, span: 2}}>{ b * x}</Col>
        </Row>
        <Row>
          <Col xs={{ offset: 0, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="c" value={guesses.c} onChange={handleSetGuesses} /></Col>
          <Col xs={{ offset: 0, span: 8}}> 
          <svg viewBox="0 0 100 100" width="100%" height="10em" preserveAspectRatio="none" style={{ position: "relative", top: "-4em", left: "0", zIndex: "1" }}>
            <path fill="#f8f9fa"  d="M25,7 L75,7 93,50 75,93 25,93 7,50z" vectorEffect="non-scaling-stroke" />
          </svg> 
          <span style={{zIndex: "50", position: "relative", top: "-10em", color: "#333333" }}>{ a + b + c + x + y + z }</span> 
          
          </Col>
          <Col xs={{ offset: 0, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="x" value={guesses.x} onChange={handleSetGuesses}  /></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 1, span: 2}}>{y * c}</Col>
          <Col xs={{ offset: 6, span: 2}}>{ x * z }</Col>
        </Row>
        <Row>
          <Col xs={{ offset: 2, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="y" value={guesses.y} onChange={handleSetGuesses}  /></Col>
          <Col xs={{ offset: 0, span: 4}}>{ y * z }</Col>
          <Col xs={{ offset: 0, span: 2}}><input type="text" inputmode="numeric" className="guess" data-index="z" value={guesses.z} onChange={handleSetGuesses}  /></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 0, span: 12}}><Button variant="success" onClick={handleCheck}>Check!</Button></Col>
        </Row>
        <Row>
          <Col xs={{ offset: 0, span: 12}}><Button onClick={handleHowToPlayShow}>How to Play?</Button></Col>
        </Row>
      </Container>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          { (resultVal) ? <p>You are Correct!!!</p>  : <p>You are Incorrect...</p> }
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          { (resultVal) ? <Button variant="primary" onClick={handlePlayAgain}>Play Again!</Button> : "" }
        </Modal.Footer>
      </Modal>

      <Modal show={howToPlay} onHide={handleHowToPlayClose}>
        <Modal.Header closeButton>
          <Modal.Title>How to Play</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <ul>
            <li><b>Goal:</b> Guess the 6 correct corner values, which can be a value of 1-16</li>
            <li>The sides of the hexagon show the product of the two connecting corners</li>
            <li>The center shows the sum of all of the corners</li>
            <li>Good luck and have fun!</li>
          </ul>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleHowToPlayClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default App;
