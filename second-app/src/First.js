import React,{useRef} from "react";
function First(){
    const uname = useRef("");
    const upwd = useRef("");
    const login = ()=>{
        uname.current.value === "admin" && upwd.current.value === "admin" ? alert("Login Success"):alert("Login Fail");
    }
    return(
        <React.Fragment>
            <input type="text" 
                   ref={uname}
                   placeholder="Enter User Name"></input>
            <br></br><br></br>
            <input type="password" 
                   ref={upwd} 
                   placeholder="Enter Password"></input>
            <br></br><br></br>
            <button onClick={login}>Click Me</button>
        </React.Fragment>
    )
}
export default First;