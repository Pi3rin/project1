import React,{useState} from "react"
import { Botao,Countercontainer } from "./syle";


export function Counter(){
    const [variavel,setVariavel] = useState(0);
    const handleIncrement = () => {
        setVariavel(variavel+1)}
    const handleDecrement = () => {
        setVariavel(variavel-1)}
    return(<Countercontainer>
        <p>{variavel}</p>
        <Botao onClick={handleIncrement}>Increment</Botao>
        <Botao onClick={handleDecrement}>Decrement</Botao>
    </Countercontainer>)

}       