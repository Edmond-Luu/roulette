
import React from 'react'
// @ts-ignore
import { Button } from "reactbulma"

export default function Form(props: any) {
    return (
        <div className="formContainer">
            <Button danger onClick={props.spinClick} className="spinButton">SPIN</Button>
            <p className="formTitle">Place your bets:</p>
            <form>
                <div>
                    <label htmlFor='colorBet' className="selectLabel">Bet amount</label>
                    <input type="number" id="colorBet" name="colorBet" onChange={props.handleChange} value={props.betData.colorBet}/>
                </div>
                <div>
                    <label htmlFor='selectColor' className="selectLabel">Color - Pays 2 to 1</label>
                    <select id="selectColor" className="optionSelect" name="color" onChange={props.handleChange} value={props.betData.color}>
                        <option value="">No bet</option>
                        <option value="black">⚫</option>
                        <option value="red">🔴</option>
                        <option value="green">🟢</option>
                    </select>
                </div>

                <br/>

                <div>
                    <label htmlFor='oddEvenBet' className="selectLabel">Bet amount</label>
                    <input type="number" id="oddEvenBet" name="oddEvenBet" onChange={props.handleChange} value={props.betData.oddEvenBet}/>
                </div>
                <div>
                    <label htmlFor='selectOddEven' className="selectLabel">Odd or Even - Pays 2 to 1</label>
                    <select id="selectOddEven" className="optionSelect" name="oddEven" onChange={props.handleChange} value={props.betData.oddEven}>
                        <option value="">No bet</option>
                        <option value="even">Even</option>
                        <option value="odd">Odd</option>
                    </select>

                </div>
            </form>
        </div>

    )
}
