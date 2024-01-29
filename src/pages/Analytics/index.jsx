import axios from "axios";
import { useEffect, useState } from "react";
import { CiDollar } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RiHandbagLine } from "react-icons/ri";


function Analytics() {
  
    return (
      

      <>
      <div style={{overflowY:"scroll",height:"700px"}}>

         <section id="product">
          <div>
            <ul>
              <li style={{fontSize:"64px",color:"orangered"}}><CiDollar /></li>
              <li>Total Sales<br/>{"112222"}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li style={{fontSize:"64px",color:"orangered"}}><CiShoppingCart /></li>
              <li>Total Orders<br/>{"112222"}</li>
            </ul>
          </div>
          <div>
          <ul>
              <li style={{fontSize:"64px",color:"orangered"}}><RiHandbagLine /></li>
              <li>Total Products<br/>{"112222"}</li>
            </ul>
          </div>
         </section>

         <section id="charts">
           <ul>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"25px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"50px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"100px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"150px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"120px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"25px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"50px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"100px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"150px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"120px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"150px"}}></li>
            <li style={{backgroundColor:"rgb(23,4,5)",height:"120px"}}></li>
           </ul>
         </section>
         <center><section style={{height:"20px",width:"1130px",backgroundColor:"black",marginLeft:"20px",paddingLeft:"60px",color:"white"}}>
         Jan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Feb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
         Mar&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Apr&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         May&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Jun&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Jul&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Aug&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Sep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Oct&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Nov&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         Dec&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         </section></center>
         <center><h1> Revenue per month </h1></center>
      
         </div>
      </>
    );
  }
  
 
  
  export default Analytics;
  