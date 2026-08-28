import { useState, useEffect } from "react";
const TimeDown = () => {

    const [userTime, setUserTime] = useState("2036")
    const [timeLeft, setTimeLeft] = useState(2036)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(()=> {
        let timerId;
        if(isRunning && timeLeft > 0){
            timerId = setInterval(() => {
                setTimeLeft((prev) => prev - 1)
            }, 1000);
        }

    return ()=> clearInterval(timerId)

    }, [isRunning, timeLeft])

    const handleStart = ()=> {
        if(timeLeft > 0) {
        setIsRunning(true)
        }
    }

    const handleStop = () => {
        setIsRunning(false)
    }

    const handleReset = () => {
        setIsRunning(false)
        setTimeLeft(userTime)
    }

    const handleTimer = (e)=>{
        const value = (e.target.value);
        setUserTime(value)
        setTimeLeft(value)
        setIsRunning(false)
    }

    return (
        <div>
            <h1>Countdown Timer</h1>

            <label >Set Time (Seconds): </label>
            <input 
                   type="number"
                   onChange={handleTimer}
                   value={userTime}
                   />
            <p>Time Left: {timeLeft} Seconds</p>
            <button disabled={isRunning || timeLeft === 0} onClick={handleStart}>Start</button>
            <button disabled={!isRunning} onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TimeDown;