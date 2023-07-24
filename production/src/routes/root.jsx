import { 
    Outlet, 
    NavLink, // Active link styling
    // Link, // regular linking
    useLoaderData,
    Form,
    redirect,
    useNavigation, //manages current navigation state; adds a fade while loading, based in CSS - can change to spinner, etc
    useSubmit, // updates search results with every stroke
} from "react-router-dom"
import { useEffect } from "react"; //manipulates form's state in DOM directly
import {default as AppBar} from "../AppBar";
import { MuiDrawer } from "../Drawer";

export default function Root() {
    const navigation = useNavigation();

    return (
      <>
        <div id="appbar">
            <AppBar className = "logobar"/>
        </div>
        <div 
            id="detail" 
            className={
                navigation.state ==="loading" ?"loading":""
            }
        >
            <Outlet />
        </div>
      </>
    );
  }