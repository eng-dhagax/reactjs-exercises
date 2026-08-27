import { useEffect, useState } from "react";
const GreetingTitle = () => {

    const [title, setTitle] = useState("")
    const [greeting, setGreeting] = useState("Hello")

    useEffect(() => {
        if(!title) {
            document.title = "Welcome!"
        } else{
            document.title = `${title}, ${greeting}`
        }
    }, [title, greeting])

    return (
        <div>
            <h2>Enter Your Name:</h2>
            <input 
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  />
            <h2>Choose a Greeting</h2>
            <input 
                  type="text"
                  onChange={(e)=> setGreeting(e.target.value)}
                  value={greeting}
                  />
        </div>
    )
}

export default GreetingTitle;