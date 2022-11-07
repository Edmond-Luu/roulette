import React from 'react';
import { Wheel } from 'react-custom-roulette';
//@ts-ignore
import { Container, Title } from 'reactbulma';
import { wheel } from './wheel';

import Form from "./components/Form";
import Footer from "./components/Footer"

function App() {

  const [mustSpin, setMustSpin] = React.useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = React.useState<number>(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * wheel.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }


  return (
    <div className="app">

      <Container>
        <div className="wholeApp">
          <div>
            <h1 className="title">React Roulette Game</h1>
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
