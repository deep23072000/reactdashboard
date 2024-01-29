import { Link,Outlet, useParams } from "react-router-dom";
import '../../assets/styles/index.css';
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { useContext } from "react";
import { StateContext } from "../../utils/contextLogin/createContext";
import Img from '../../assets/images/login.png'
function Sidebar(){
  let information = localStorage.getItem('infoimg');
  

  let aaa = localStorage.getItem('infostate');
  let iddd = localStorage.getItem('idstore');
  let {token} = useContext(StateContext)
  let nav = useNavigate()
  useEffect(()=>{
  if(token || aaa){
    console.log("ok")
  }
  else{
    nav("/")
  }
},[token])
    return (
      <>
        <aside id="sidebar">
            <ul>
            <li><img style={{borderRadius:"50%"}} src={information} width={"100px"} height={"100px"} alt="..." /></li>

                <li><Link to="/" style={{display:"none"}}> Login </Link></li>
                <li><Link to="/registration" style={{display:"none"}}> registration </Link></li>
                <li><Link to={`dashboard/${iddd}`}>Dashboard</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/orders">Orders</Link></li>
                <li style={{display:"none"}}><Link to="orders/:id" >Dashboard</Link></li>

                <li><Link to="/customers">Customers</Link></li>
                <li><Link to="/analytics">Analytics</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/settings">Settings</Link></li>

            </ul>
            <Outlet/>
        </aside>
      </>
    );
  }
  export default Sidebar;
  