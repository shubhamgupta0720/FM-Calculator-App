import React from "react";

function Calculator(){
    return(
        <div id="calculatorPanel">
            <input type="text" readOnly/>
            <div className="key-panel">
                <div className="numeric-arithmetic-buttons">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>.</button>
                    <button>DEL</button>
                    <button>+</button>
                    <button>-</button>
                    <button>x</button>
                    <button>/</button>
                </div>
                <div className="reset-equal">
                    <button>RESET</button>
                    <button>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator;