import React,{useState} from "react";
function Fourth(){
    const [str,setStr] = useState("Hello");
    const func_one = ()=>{
        setStr("Welcome");
    }
    const func_two = (param1)=>{
        setStr(param1);
    }
    return(
        <React.Fragment>
            <h1>{str}</h1>
            <button onClick={func_one}>Click Me</button>
            <button onClick={()=>{func_two("ReactJS")}}>Click Me</button>
        </React.Fragment>
    )
}
export default Fourth;