//JSON
//Java Script Object Notation
//Java Script Objects
//JSON, used to transfer the data over the Network
//JSON is light weight
//Objects ---- {}
//Arrays  ---- []
//Data    ---- key & value pairs

/*
    let obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    console.log( obj.key1, obj.key2, obj.key3 );
    //Hello_1 Hello_2 Hello_3


    console.log( obj["key1"], obj["key2"], obj["key3"] );
    //Hello_1 Hello_2 Hello_3

    let {key1,key2,key3} = obj;
    console.log(key1,key2,key3);
    //Hello_1 Hello_2 Hello_3


    //for....in
    for(let key in obj){
        console.log( obj[key] );
    }
    //Hello_1
    //Hello_2
    //Hello_3
*/

/*
    let obj = {
        "key1" : "Hello_1",
        100  : "Hello_2",
        true : "Hello_3"
    }

    //[]
    console.log(
        obj["key1"], obj["100"], obj["true"]
    );
    //Hello_1 Hello_2 Hello_3
*/

/*
    let obj = {
        "obj":{
            "obj":{
                "key1" : "Hello_1"
            }
        }
    };
    let {obj:d1} = obj;
    let {obj:d2} = d1;
    let {key1} = d2;
    console.log(key1);              //Hello_1
*/

/*
    let obj = [
        {p_id:111,p_name:"p_one",p_cost:10000},
        {p_id:222,p_name:"p_two",p_cost:20000},
        {p_id:333,p_name:"p_three",p_cost:30000},
        {p_id:444,p_name:"p_four",p_cost:40000},
        {p_id:555,p_name:"p_five",p_cost:50000}
    ];
    //forEach()
    obj.forEach(element=>console.log(element.p_id, element.p_name, element.p_cost))
*/


/*
    let obj1 = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    let xeroxObj1 = {...obj1};

    obj1.key4 = "Hello_4";
    xeroxObj1.key4 = "Welcome_4";

    console.log(obj1);
    //{ key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3', key4: 'Hello_4' }
    console.log(xeroxObj1);
    /*
        {
            key1: 'Hello_1',
            key2: 'Hello_2',
            key3: 'Hello_3',
            key4: 'Welcome_4'
        }
    */

/*
    let obj1 = {
        "key1" : "Hello_1",
        "key2" : "Hello_2",
        "key3" : "Hello_3"
    };

    let obj2 = {
        ...obj1,
        "key4" : "Hello_4"
    };

    console.log(obj1);
            //{ key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3' }
    console.log(obj2);
            //{ key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3', key4: 'Hello_4' }
*/


/*
    let obj1 = {
        "key1" : "Hello_1"
    };
    let obj2 = {
        "key2" : "Hello_2"
    };
    let obj3 = {
        "key3" : "Hello_3"
    };
    let obj4 = {...obj1,...obj2,...obj3};
    console.log(obj4);
    //{ key1: 'Hello_1', key2: 'Hello_2', key3: 'Hello_3' }
*/

/*
    let obj1 = {
        key1 : ()=>{
            return {
                key1 : "Hello_1"
            }
        }
    };
    let {key1} = obj1;
    let obj = key1();
    let {key1:k} = obj;
    console.log(k);             //Hello_1
*/

/*
    let obj1 = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };
    delete obj1.key1;
    console.log(obj1);                  //{ key2: 'Hello_2', key3: 'Hello_3' }
*/

/*
    let obj = {
        key1 : "Hello_1",
        key2 : "Hello_2",
        key3 : "Hello_3"
    };

    obj.key1 = "Welcome_1";
    obj.key2 = "Welcome_2";
    obj.key3 = "Welcome_3";
    console.log(obj);               
            //{ key1: 'Welcome_1', key2: 'Welcome_2', key3: 'Welcome_3' }
*/


let obj = [
    {p_id:111,p_name:"p_one",p_cost:10000},
    {p_id:222,p_name:"p_two",p_cost:20000},
    {p_id:333,p_name:"p_three",p_cost:30000},
    {p_id:444,p_name:"p_four",p_cost:40000},
    {p_id:555,p_name:"p_five",p_cost:50000}
];
let objRes = obj.filter((element, index) => {
    return element.p_cost>= 40000
});
console.log(objRes)
//[
//    { p_id: 444, p_name: 'p_four', p_cost: 40000 },
//    { p_id: 555, p_name: 'p_five', p_cost: 50000 }
// ]






















































































































