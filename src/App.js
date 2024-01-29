import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard/index';
import Products from './pages/Products/index';
import Orders from './pages/Orders/index';
import Customers from './pages/Customers/index';
import Setting from './pages/Setting/index';
import Reviews from './pages/Reviews/index';
import Analytics from './pages/Analytics/index';
import Top from './components/Top';
import Registration from './pages/Registration';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import { useState } from 'react';
import UpdateForm from './pages/Orders/updateform';

function App() {
 

 
  const [side,setSide] = useState(<Sidebar/>);
  const [top,setTop] = useState(<Top/>);
  let a = {
    marginLeft:"10px"
  }
  return (
    <>      
      <BrowserRouter>
          {side}
          {top}
          <Routes>
            <Route path='/' element={<Login props={setSide} props1={setTop} />}></Route>
            <Route path='/registration' element={<Registration props={setSide} props1={setTop} />}></Route>
            <Route path='/dashboard/:id' element={<Dashboard style={a}/>}></Route>
            {/* <Route path='/dashboard/:cusdata' element={<UpdateForm style={a}/>}></Route> */}
            <Route path='/products' element={<Products style={a}/>}></Route>
            <Route path='/orders' element={<Orders style={a}/>}></Route>
            <Route path='/orders/:id' element={<UpdateForm style={a}/>}></Route>
            <Route path='/customers' element={<Customers style={a}/>}></Route>
            <Route path='/analytics' element={<Analytics style={a}/>}></Route>
            <Route path='/reviews' element={<Reviews style={a}/>}></Route>
            <Route path='/settings' element={<Setting style={a}/>}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
