// import { useState } from "react";

const Top = ()=>{

    let infoname = localStorage.getItem('infoname');
    let infoemail = localStorage.getItem('infoemail');

    
    return(
        <>
         <center><aside style={{float:"top",backgroundColor:"rgb(46, 46, 54)",display:"flex",justifyContent:"center",padding:"20px"}}>
            <div style={{fontSize:"50px",color:'white'}}>Admin Dashboard</div>
            <div>
            <span style={{fontSize:"20px",color:'white'}}>{infoemail}</span><br/>
            <span style={{fontSize:"20px",color:'white'}}>{infoname}</span>
            </div>
            {/* <div>1</div> */}
         </aside></center>
        </>
    )
}

export default Top;