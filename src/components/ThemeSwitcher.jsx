import React from "react";

function ThemeSwitcher(){
    return(
        <div id="logoSwitch">
            <h1>calc</h1>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>

        </div>
    )
}

export default ThemeSwitcher;