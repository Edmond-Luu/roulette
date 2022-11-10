
import React from 'react'
// @ts-ignore

export default function Form(props: any) {
    return (
        <div className="formContainer">
            <p className="formTitle">Place your bets:</p>
            <form>
                <div className="betField">
                    <div>
                        <label htmlFor='colorBet' className="betLabel">Bet amount</label>
                        <input type="number" id="colorBet" name="colorBet" className="betInput" onChange={props.handleChange} value={props.betData.colorBet} />
                    </div>
                    <div>
                        <label htmlFor='selectColor' className="selectLabel">Color</label>
                        <select id="selectColor" className="optionSelect" name="color" onChange={props.handleChange} value={props.betData.color}>
                            <option value="black">⚫ - Pays 1 to 1</option>
                            <option value="red">🔴 - Pays 1 to 1</option>
                            <option value="green">🟢 - Pays 17 to 1</option>
                        </select>
                    </div>
                </div>

                <div className="betField">
                    <div>
                        <label htmlFor='oddEvenBet' className="betLabel">Bet amount</label>
                        <input type="number" id="oddEvenBet" name="oddEvenBet" className="betInput" onChange={props.handleChange} value={props.betData.oddEvenBet} />
                    </div>
                    <div>
                        <label htmlFor='selectOddEven' className="selectLabel">Odd or Even - Pays 1 to 1</label>
                        <select id="selectOddEven" className="optionSelect" name="oddEven" onChange={props.handleChange} value={props.betData.oddEven}>
                            <option value="even">Even</option>
                            <option value="odd">Odd</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>

    )
}
