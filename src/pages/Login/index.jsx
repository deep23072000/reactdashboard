import Img from '../../assets/images/login.png';
import '../../assets/styles/index.css';
import Sidebar from '../../components/sidebar';
import Top from '../../components/Top';
import { useNavigate} from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { StateContext } from '../../utils/contextLogin/createContext';
// import { useParams } from 'react-router-dom';
const Login = ({props,props1})=>{
    const {setToken} = useContext(StateContext);
    localStorage.removeItem('infodata');
    localStorage.removeItem('infostate');


    let navi = useNavigate();
    props(false);
    props1(false);
    let [input,setInput] = useState({
            "email":'',
            "password":''}
            )

    const handleInput = (e)=>{
           let name  = e.target.name;
           let value = e.target.value;
           setInput({...input,[name]:value})
    }   
        
    const loggedin = async ()=>{ 
        
        let data = await axios.get('http://localhost:4000/registration');
        let response = await data.data;

        let info = response.find(e=> e.email === input.email && e.password === input.password)    
          
        if(info){
            setToken(true);
            // console.log(token)
            localStorage.setItem('infoimg',info.img)
            localStorage.setItem('infoemail',info.email)
            localStorage.setItem('infoname',info.name)
            localStorage.setItem('idstore',info.id)
        props(<Sidebar/>);
        props1(<Top/>);
        navi(`/dashboard/${info.id}`);
        }
        else{
            navi("/")
        }   
    }
    
    return(
        <>
        <center>
            <section >
                   {/* <img src={Img} style={{width:"100%",height:"100vh"}} alt='...'></img> */}
                   <div id='login'>
                   <h1>Login Form</h1>

                   <input type='text' name='email' value={input.email} placeholder='Email ID' onChange={handleInput}></input><br></br>

                   <input type="password" name='password' value={input.password} placeholder='Enter Password' onChange={handleInput}/><br></br>

                   <button onClick={loggedin}> Login </button>

                   <div style={{color:"white",textDecoration:"underline",cursor:"pointer"}} onClick={()=>{navi("/registration")}}>Signup </div>
                   </div>
            </section>
            </center>
        </>
    )
}
export default Login;