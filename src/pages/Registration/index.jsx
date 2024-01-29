
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Registration = ({props,props1})=>{

   let navi = useNavigate();   

    let [input,setInput] = useState({
            "name":'',
            "email":'',
            "mobile":'',
            "img":'',
            "password":''
          }
            )

    const handleInput = (e)=>{
           let name  = e.target.name;
           let value = e.target.value;
           setInput({...input,[name]:value})
    }  
    
    const reg = ()=>{
      axios.post('http://localhost:4000/registration',input).then(()=>{navi("/")})
    }
    
    return(
        <>
        <center>
            <section >
                   
                   <div id='login'>
                   <h1>Registration Form</h1>

                   <input type='text' name='name' value={input.name} placeholder='Enter User Name' onChange={handleInput}></input><br></br>

                   <input type='text' name='email' value={input.email} placeholder='Email ID' onChange={handleInput}></input><br></br>

                   <input type='text' name='mobile' value={input.mobile} placeholder='Enter Mobile number' onChange={handleInput}></input><br></br>

                   <input type='text' name='img' value={input.img} placeholder='Enter Image Url' onChange={handleInput}></input><br></br>

                   <input type="password" name='password' value={input.password} placeholder='Enter Password' onChange={handleInput}/><br></br>

                   <button onClick={reg}> Login </button>

                   </div>
            </section>
            </center>
        </>
    )
}
export default Registration;