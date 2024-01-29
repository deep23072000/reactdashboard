import axios from "axios";
import { useEffect, useState } from "react";

const UpdatePassword = () => {
    const [input, setInput] = useState("");
    const id = localStorage.getItem('idstore');
    const afid = parseInt(id);
    

    const fetchData = async () => {        
            const response = await axios.get("http://localhost:4000/registration");
            const responseData = await response.data;

            const userToUpdate = responseData.find(user => user.id === afid);

            if (userToUpdate) {
                userToUpdate.password = input;

                await axios.put(`http://localhost:4000/registration/${afid}`, userToUpdate).then(()=>{alert("updATED")});

               
            } else {
                console.log(`User with ID ${id} not found`);
            
    };
}
 

    return (
        <>         
            <input type="text" placeholder="enter password" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={fetchData}>Update Password</button>
        </>
    );
};

export default UpdatePassword;
