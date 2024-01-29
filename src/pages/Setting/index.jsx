
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../utils/contextLogin/createContext";
import UpdatePassword from "./updatepassword";
import { useState } from "react";

function Settings() {
  const [passup,setPassup] = useState(false)
  
  const navi = useNavigate();

  const logout = ()=>{
    navi("/")
  }
  const ppp = ()=>{
    setPassup(<UpdatePassword/>)
  }



    return (
      <>
          <button onClick={logout}> logout </button>

          <button onClick={ppp}> Update password </button>
          {passup}

         
      </>
    );
  }
  
  export default Settings;
  