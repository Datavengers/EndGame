import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";


function App() {

    const [listOfContacts, setListOfContacts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/contacts").then((response) => {
            setListOfContacts(response.data);
        })
    }, []);


    return (
        <div className="App"> 
            {listOfContacts.map((value, key) => {
                return (
                    <div className="contact"> 
                        <div className="first"> {value.first} </div>
                        <div className="last"> {value.last}</div>
                        <div className="twitter"> {value.twitter}</div>
                        <div className="avatar"> {value.avatar} </div>
                        <div className="notes"> {value.notes}</div>;
                    </div>
                );
            })} 
        </div>
    );
}

export default App;