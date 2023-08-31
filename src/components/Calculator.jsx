import { useState } from "react"
import "../components/style/calculator.css"
export const Calculator = () => {
    const [ val , setVal]= useState("");

    return (
        <div>
            <h1 className="tex-center text-white bg-dark">
                Calculator by Kathir
            </h1>
            <div className="container" style={{padding:"125px"}}>
                <div className="row">
                    <div className="calculator num-1 col-4">
                        <div className="row cal-row">
                            <input type="text" className="form-control input" value={"Result :  "+val} disabled/>
                        </div>
                        <div className="row cal-row">
                            <button className="btn btn-info" onClick={(e)=>setVal('')}>AC</button>
                            <button className="btn btn-danger" onClick={(e)=>setVal(val.slice(0,-1))}>DE</button>
                        </div>
                        <div className="row cal-row">
                            <button className="btn btn-primary" value="7" onClick={(e)=>setVal(val + e.target.value)}>7</button>
                            <button className="btn btn-primary" value="8" onClick={(e)=>setVal(val + e.target.value)}>8</button>
                            <button className="btn btn-primary" value="9" onClick={(e)=>setVal(val + e.target.value)}>9</button>
                            <button className="btn btn-warning" value="*" onClick={(e)=>setVal(val + e.target.value)}>x</button>
                        </div>
                        <div className="row cal-row">
                            <button className="btn btn-primary" value="4" onClick={(e)=>setVal(val+e.target.value)}>4</button>
                            <button className="btn btn-primary" value="5" onClick={(e)=>setVal(val+e.target.value)}>5</button>
                            <button className="btn btn-primary" value="6" onClick={(e)=>setVal(val+e.target.value)}>6</button>
                            <button className="btn btn-warning" value="-" onClick={(e)=>setVal(val+e.target.value)}>-</button>
                        </div>
                        <div className="row cal-row">
                            <button className="btn btn-primary" value="1" onClick={(e)=>setVal(val+e.target.value)}>1</button>
                            <button className="btn btn-primary" value="2" onClick={(e)=>setVal(val+e.target.value)}>2</button>
                            <button className="btn btn-primary" value="3" onClick={(e)=>setVal(val+e.target.value)}>3</button>
                            <button className="btn btn-warning" value="+" onClick={(e)=>setVal(val+e.target.value)}>+</button>
                        </div>
                        <div className="row cal-row">
                            <button className="btn btn-primary" value="." onClick={(e)=>setVal(val+e.target.value)}>.</button>
                            <button className="btn btn-primary" value="/" onClick={(e)=>setVal(val+e.target.value)}>/</button>
                            <button className="btn btn-success" value="=" onClick={(e)=>setVal(eval(val))}>=</button>
                        </div>
                    </div>
                    </div>
            </div>
        </div>
    )
}
