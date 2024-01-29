import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Orders=()=> {
  const navi = useNavigate();
  const [customersData,setCustomersData] = useState([])
  const [afterdel,setAfterdel] = useState(false);

  useEffect(()=>{
       
  },[afterdel])

    useEffect(()=>{
      const showdata = async()=>{
           const data = await axios.get('http://localhost:4000/customers');
           const response = await data.data;
           setCustomersData(response);

      }
      showdata()
    },[])
  const del = (arg)=>{
    alert(arg)
    axios.delete(`http://localhost:4000/customers/${arg}`).then(()=>{setAfterdel(true)});
    const showdata = async()=>{
      const data = await axios.get('http://localhost:4000/customers');
      const response = await data.data;
      setCustomersData(response);

 }
 showdata()
    
  }
    return (
      <>
      <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Latest Orders</h1>
      <button onClick={()=>{navi("/customers")}}  style={{float:"right",marginRight:"120px"}}>Add Orders</button>
         <table align="center"  cellPadding={"20px"} border={"2px"}>
              {customersData.map((e)=>{
                return <tr style={{display:"flex"}} key={e.id} >
                    <td style={{width:"200px"}}>{e.name}</td>
                    <td style={{width:"200px"}}>{e.email}</td>
                    <td style={{width:"200px"}}>{e.money}</td>
                    <td style={{width:"200px"}}>{e.status}</td>
                    <td style={{width:"200px"}}>{e.date}</td>
                    <td><Link  to={`/orders/${e.id}`}> Update </Link></td>
                    <td onClick={()=>{del(e.id)}}>Delete</td>
                  </tr>
              })}
                </table>
              
      </>
    );
  }
  
  export default Orders;
  