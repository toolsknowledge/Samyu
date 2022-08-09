/*
    let func_one = (param1)=>{
        param1();
    };
    func_one( ()=>{
        console.log("welcome to callbacks")
    } );
    //welcome to callbacks
*/

/*
    let networkCall = (successCallBack,errorCallBack)=>{
        let res1 = successCallBack();
        let res2 = errorCallBack();
        console.log(res1);
        console.log(res2);
    };
    networkCall( ()=>{
        return "Success";
    }, ()=>{
        return "Error";
    } );                //Success           Error
*/


let add = (num,callback)=>{
    return callback(num+5,false);
}
let sub = (num,callback)=>{
    return callback(num-3,false);
}
let mul = (num,callback)=>{
    return callback(num*2,false);
}
let div = (num,callback)=>{
    return callback(num/2-2,false);
}
add(5,(addRes,error)=>{
    if(!error){
        sub(addRes,(subRes,error)=>{
            if(!error){
                mul(subRes,(mulRes,error)=>{
                    if(!error){
                        div(mulRes,(divRes,error)=>{
                            if(!error){
                                console.log(divRes);
                            }
                        });
                    }
                });
            }
        });
    }
});
//callback hell


//Promises




























