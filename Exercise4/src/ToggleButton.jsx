import { useState } from "react";

const ToggleButton = () => {
    
    const [ison, setIsOn] = useState(true)

    const toggle = () => {
        setIsOn(!ison)
    }

    return (
        <>
        <h3>The button is {ison ? 'ON' : 'OFF'} </h3>
        <button onClick={toggle}>Turn {ison ? 'OFF' : 'ON'} </button>
        </>
    )
}

export default ToggleButton;