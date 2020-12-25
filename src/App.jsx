import React, { useEffect, useState } from "react";
import "./App.css";

function App()
{
    const [load,setLoad] = useState(true);
    const [newAdvice,setNewAdvice] = useState("");
    const getData = async ()=>{
        setLoad(true);
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data.slip.advice);
        const advice = data.slip.advice;
        setNewAdvice(advice);
        setLoad(false);
    }
    useEffect(()=>{
        getData();
    },[]);

    return (
        <div className="app">
            <div className="card">
            <h1 className="heading">{load ? "loading..." : newAdvice}</h1>
            <button className="button" onClick={getData}>
                <span>
                    GIVE ME ADVICE
                </span>
            </button>
            </div>
        </div>
    );
}

export default App;