/*route to edit a contact*/
import { 
    Form, 
    useLoaderData,
    redirect,
    useNavigate,
 } from "react-router-dom";
 import { useRef } from "react";
 import { updateContact } from "../contacts";
 import axios from "axios";
 import {v4 as uuidv4} from "uuid";

 const databaseUrl = "localhost:3000/contacts";

 export async function action({ request, params }) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId, updates);
    return redirect(`/contacts/${params.contactId}`);
 }

export default function EditContact() {
  // const { contact } = useLoaderData();
  const firstRef = useRef();
  const lastRef = useRef();
  const twitRef = useRef();
  const urlRef = useRef();
  const noteRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    const first = firstRef.current.value 
    const last = lastRef.current.value 
    const twitter = twitRef.current.value 
    const avatarUrl = urlRef.current.value 
    const notes = noteRef.current.value 
  

  if (first == '' ||last == '') return
  const id = uuidv4();
  axios.post(`${databaseUrl}`, {
    id: id,
    first: first,
    last: last,
    twitter: twitter,
    avatar: avatarUrl,
    notes: notes
  }).then((response) => {
    console.log(response);
  });

  firstRef.current.value = null
  lastRef.current.value = null
  twitRef.current.value = null
  urlRef.current.value = null
  noteRef.current.value = null

  e.preventDefault();
  }

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first"
          // defaultValue={first}
          ref={firstRef}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last"
          // defaultValue={contact.last}
          ref={lastRef}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          // defaultValue={contact.twitter}
          ref={twitRef}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="text"
          name="avatar"
          // defaultValue={contact.avatar}
          ref={urlRef}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          // defaultValue={contact.notes}
          rows={6}
          ref={noteRef}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button 
            type="button"
            onClick={() => {
                handleSubmit;
                navigate(-1);
            }}
        >
            Cancel
        </button>
      </p>
    </Form>
  );
}