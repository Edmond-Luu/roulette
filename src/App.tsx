import React from 'react';
import { Wheel } from 'react-custom-roulette';
//@ts-ignore
import { Container, Title } from 'reactbulma';
import { data } from './data';

import Form from "./components/Form";
import Footer from "./components/Footer"

function App() {

  const [mustSpin, setMustSpin] = React.useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = React.useState<number>(0);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }


  return (
    <div className="app">
      <Container>
        <h1 className="title">React Roulette Game</h1>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          radiusLineColor='#ffd700'
          outerBorderColor='#ffd700'
          textDistance={90}
          perpendicularText={true}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
        <Form
          spinClick={handleSpinClick}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
