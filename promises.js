//Promises are used to make Async Calls
//Promises are Special JavaScript Objects
//Contract Between Producer and Consumer called as Promises
//Producer will create Promises
//Consumer Will Consume Promises
//Promise is the Predefined Class, used create the Promises
//We will consume Promises in two ways
//1) then()
//2) async & await
//Promises have 3 states
//1) pending
//2) success
//3) failure

/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Welcome to Promises");
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //Welcome to Promises
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("welcome to promises");
        },5000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
    //welcome to promises
*/
/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve(10+10);
    });
    async function consume(){
        let res = await promise1;
        console.log(res);
    };
    consume();              //20
*/


function add(num){
    return new Promise((resolve,reject)=>{
        resolve(num+5);
    })
}
function sub(num){
    return new Promise((resolve,reject)=>{
        resolve(num-3);
    })
}
function mul(num){
    return new Promise((resolve,reject)=>{
        resolve(num*2);
    })
}
function div(num){
    return new Promise((resolve,reject)=>{
        resolve(num/2-2);
    });
};
async function calculator(){
    let addRes = await add(5);
    let subRes = await sub(addRes);
    let mulRes = await mul(subRes);
    let divRes = await div(mulRes);
    console.log( addRes, subRes, mulRes, divRes );
}
calculator();




































