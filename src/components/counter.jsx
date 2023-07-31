import React,{useState} from "react"


export function Counter(){
    const [variavel,setVariavel] = useState(0);
    const handleIncrement = () => {
        setVariavel(variavel+1)}
    const handleDecrement = () => {
        setVariavel(variavel-1)}
    return(<div>
        <p>{variavel}</p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
    </div>)

}