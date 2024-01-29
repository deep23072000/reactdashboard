
import Orders from "../Orders";
import Analytics from "../Analytics";

const Dashboard=()=> {
  
    return (
      <>

      <div style={{overflowY:"scroll",height:"800px"}}>
        <Analytics/>
        <Orders/>
      
      </div>
      
               
      </>
    );
  }
  
  export default Dashboard;
  