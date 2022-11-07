import React from 'react';
import { Wheel } from 'react-custom-roulette';
//@ts-ignore
import { Container, Title } from 'reactbulma';
import { wheel } from './wheel';

import Form from "./components/Form";
import Footer from "./components/Footer"

function App() {

  const [mustSpin, setMustSpin] = React.useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = React.useState<number>(NaN);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * wheel.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
  
  const winningNumberStyles : {backgroundColor: string;}={
    backgroundColor: isNaN(prizeNumber) || mustSpin ? "white" : wheel[prizeNumber].style.backgroundColor === "black" ? "black" : wheel[prizeNumber].style.backgroundColor === "red" ? "red" : "green"
  }


  return (
    <div className="app">

      <Container>
        <h1 className="title">React Roulette Game</h1>
        <div className="wholeApp">
          <div className="leftGrid">

            <div className="winningNumber" style={winningNumberStyles}>
              {isNaN(prizeNumber) || mustSpin ? "" : wheel[prizeNumber].option}
            </div>

            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={wheel}
              backgroundColors={['#3e3e3e', '#df3428']}
              textColors={['#ffffff']}
              radiusLineColor='#ffd700'
              outerBorderColor='#ffd700'
              textDistance={90}
              perpendicularText={true}
              onStopSpinning={() => {
                setMustSpin(false)
                console.log(wheel[prizeNumber]);
              }}
            />
            <Form
              spinClick={handleSpinClick}
            />
          </div>
        </div>
      </Container>

      <Footer />
    </div >
  );
}

export default App;
