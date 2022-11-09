import React from 'react';
import { Wheel } from 'react-custom-roulette';
//@ts-ignore
import { Container, Button } from 'reactbulma';
import { wheel } from './wheel';

import Form from "./components/Form";
import Footer from "./components/Footer"

function App() {

  const [mustSpin, setMustSpin] = React.useState<boolean>(false);
  const [prizeNumber, setPrizeNumber] = React.useState<number>(NaN);
  const [betData, setBetData] = React.useState({
    colorBet: 0,
    color: "",

    oddEvenBet: 0,
    oddEven: ""
  })
  // const [win, setWin] = React.useState<boolean>();
  const [money, setMoney] = React.useState<number>(100);

  const handleSpinClick = () => {
    if (money >= (Number(betData.colorBet) + Number(betData.oddEvenBet)) && money !== 0 && !mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * wheel.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setMoney(old => old - (Number(betData.colorBet) + Number(betData.oddEvenBet)));
    }
  }

  const winningNumberStyles: { backgroundColor: string; } = {
    backgroundColor: isNaN(prizeNumber) || mustSpin ? "white" : wheel[prizeNumber].style.backgroundColor === "black" ? "black" : wheel[prizeNumber].style.backgroundColor === "red" ? "red" : "green"
  }

  function handleChange(event: any) {
    const { name, value } = event.target;
    setBetData(oldData => {
      return {
        ...oldData,
        [name]: value
      }
    })
  }


  function handlePayout() {
    // Color Bet Payout
    if (betData.color === wheel[prizeNumber].style.backgroundColor) {
      setMoney(old => betData.color === "green"? old + betData.colorBet * 18 : old + betData.colorBet * 2)
    }

    // Odd Even Bet Payout
    if (wheel[prizeNumber].option !== "0" && wheel[prizeNumber].option !== "00") {
      const winningInt = parseInt(wheel[prizeNumber].option)
      if ((betData.oddEven === "odd" && winningInt % 2 === 1) || (betData.oddEven === "even" && winningInt % 2 === 0)) {
        setMoney(old => old + betData.oddEvenBet * 2)
      }
    }
  }


  return (
    <div className="app">

      <Container className="container">
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
                setMustSpin(false);
                handlePayout();
              }}
            />
            <div className="moneyDisplay">
              Your Money:
              ${money}
            </div>
            <Button danger onClick={handleSpinClick} className="spinButton">SPIN</Button>
          </div>


          <div className="centerGrid">
            <Form
              handleChange={handleChange}
              betData={betData}
            />
          </div>



          <div className="rightGrid">
          </div>

        </div>
      </Container>
      <Footer />
    </div >
  );
}

export default App;
