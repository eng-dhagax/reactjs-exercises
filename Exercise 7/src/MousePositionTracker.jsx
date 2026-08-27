import { useState, useEffect } from "react";
const MousePositionTracker = ()=> {
    const [mouse, setMouse] = useState({x:0, y:0})

    useEffect(()=> {
        const handleMouse = (e) => setMouse({x: e.clientX, y: e.clientY})

        window.addEventListener("mousemove", handleMouse)

        return()=> {
            window.removeEventListener("mousemove", handleMouse)
        }
    }, [])
    return(
        <div>
            <h1>Mouse X: {mouse.x} </h1>
            <h1>Mouse Y: {mouse.y} </h1>
        </div>
    )
}

export default MousePositionTracker;