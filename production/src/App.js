import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

    const [listOfUsers, setListofUsers] = useState([]);

    useEffect(() => {
        axios.get("http://http://localhost:3001/user").then((response) => {
            setListofUsers(response.data);
        })
    }, []);


    return (
        <div className="App"> 
            {listOfUsers.map((value, key) => {
                return 
                <div> {value.user} </div>;
  
            })} 
        </div>
    );
}

export default App;