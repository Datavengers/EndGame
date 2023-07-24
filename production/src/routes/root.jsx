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
import { getContacts, createContact } from "../contacts";
import { useEffect, useState } from "react"; //manipulates form's state in DOM directly
import {default as AppBar} from "../AppBar";
import { MuiDrawer } from "../Drawer";
import { LoginContextProvider } from '../LoginContext'
import axios from "axios";


export async function action() {
    const contact = await createContact();
    // redirect to the Edit page after making a new contact
    return redirect(`/contacts/${contact.id}/edit`);
}

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const contacts = await getContacts(q);
    return { contacts, q };
}

export default function Root() {
    const { contacts, q } = useLoaderData();
    const navigation = useNavigation();
    const submit = useSubmit();
    // makes a spinner possible as you type - see lines 51 and 64 for use
    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has(
            "q"
        );

    // clears the  search bar if you hit back button
    useEffect(() => {
    //     document.getElementById("q").value=q;
    // }, [q]);
        // api call for login

        // axios.get("http://localhost:3000/login").then((response) => {
        //     console.log(response.data);
        // });
    }, []);

    return (
      <LoginContextProvider >
        <div id="appbar">
            <AppBar className = "logobar"/>
        </div>
        <div id = "content-area">
            {/* add className="hidden" to sidebar div to hide */}
            <div id="sidebar"> 
            <h1>React Router Contacts</h1>
            <div>
                <Form id="search-form" role="search">
                <input
                    id="q"
                    className={searching ? "loading" : ""}
                    aria-label="Search contacts"
                    placeholder="Search"
                    type="search"
                    name="q"
                    defaultValue={q}
                    // makes it so one click of back clears search
                    onChange = {(event) => {
                        const isFirstSearch = q == null;
                        submit(event.currentTarget.form,{
                            replace: !isFirstSearch,
                        }); 
                    }}
                />
                <div
                    id="search-spinner"
                    aria-hidden
                    hidden={!searching}
                />
                <div
                    className="sr-only"
                    aria-live="polite"
                ></div>
                </Form>
                <Form method="post">
                    <button type="submit">New</button>
                </Form>
            </div>
            <nav>
            {contacts.length ? (
                <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        <NavLink to={`contacts/${contact.id}`}
                        className={({ isActive, isPending })=>
                    //   make the nav links highlight if active
                            isActive 
                                ? "active"
                                : isPending
                                ? "pending"
                                : ""
                            }
                        >
                        {contact.first || contact.last ? (
                        <>
                            {contact.first} {contact.last}
                        </>
                        ) : (
                        <i>No Name</i>
                        )}{" "}
                        {contact.favorite && <span>★</span>}
                    </NavLink>
                    </li>
                ))}
                </ul>
            ) : (
                <p>
                <i>No contacts</i>
                </p>
            )}
            </nav>
            <nav>
                <ul>
                    <li>
                        <NavLink 
                        to={`game_map`}
                        className={({ isActive, isPending })=>
                        //   make the nav links highlight if active
                                isActive 
                            ? "active"
                            : isPending
                            ? "pending"
                            : ""
                        }
                        >Map
                        </NavLink>
                    </li>
                </ul>
            </nav>
            </div>
            <div 
                id="detail" 
                className={navigation.state ==="loading" ?"loading":""
                }
            >
                <Outlet />
            </div>
        </div>
      </LoginContextProvider>
    );
  }