
import React from 'react'
// @ts-ignore
import { Button } from "reactbulma"

export default function Form(props: any) {
    return (
        <div className="formContainer">
                <Button danger onClick={props.spinClick}>SPIN</Button>
                <p className="formTitle">Place your bets:</p>
                <form>
                    <div>
                        <label htmlFor='optionSelect' className="selectLabel">Color - Pays 2 to 1</label>
                        <select id="optionSelect" className="optionSelect">
                            <option value="nobet">No bet</option>
                            <option value="black">⚫</option>
                            <option value="red">🔴</option>
                            <option value="green">🟢</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='optionSelect' className="selectLabel">Odd or Even - Pays 2 to 1</label>
                        <select id="optionSelect" className="optionSelect">
                            <option value="nobet">No bet</option>
                            <option value="even">Even</option>
                            <option value="odd">Odd</option>
                        </select>
                    
                    </div>
                </form>
        </div>

    )
}
