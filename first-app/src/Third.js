import React,{useState} from "react";
function Third(){
    const [str,setStr] = useState("Hello");
    const [num,setNum] = useState(100);
    const [bool,setBool] = useState(true);
    const [obj,setObj] = useState({key1:"Hello_1",key2:"Hello_2",key3:"Hello_3"});
    const [arr,setArr] = useState([10,20,30,40,50]);
    const [products,setProducts] = useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
              {"p_id":222,"p_name":"p_two","p_cost":20000},
              {"p_id":333,"p_name":"p_three","p_cost":30000},
              {"p_id":444,"p_name":"p_four","p_cost":40000},
              {"p_id":555,"p_name":"p_five","p_cost":50000}]);
    return(
        <React.Fragment>
            {bool?(<div><h5>{str}</h5><h5>{num}</h5></div>):null}
            {<h5>{obj.key1}.....{obj.key2}.....{obj.key3}</h5>}
            {
                arr.map((element,index)=>{
                    return(
                        <h5 key={index}>{element}</h5>
                    )
                })
            }
            <table border={"1"}
                   align="center">
                <tr>
                    <th>SNO</th>
                    <th>P_ID</th>
                    <th>P_NAME</th>
                    <th>P_COST</th>
                </tr>
                {
                    products.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{element.p_id}</td>
                                <td>{element.p_name}</td>
                                <td>{element.p_cost}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </React.Fragment>
    )
}
export default Third;