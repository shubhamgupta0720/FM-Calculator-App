import React from "react";

function Calculator(){
    return(
        <div id="calculatorPanel">
            <input type="text" readOnly/>
            <div className="key-panel">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>DEL</button>
                <button>+</button>
                <button>-</button>
                <button>x</button>
                <button>RESET</button>
                <button>=</button>

            </div>
        </div>
    )
}

export default Calculator;