import Skeleton from '@mui/material/Skeleton'
import { useState } from 'react'

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  return (
      <>
      {loaded?null:<Skeleton onLoad={setLoaded(true)}/>}
      <p id="zero-state">
        Welcome to the home of Datavengers' Project 3!
        <br/>
        You'll eventully be asked to login here.
        <br/>
        We don't intend for use without an account.
        <br/><br/><br/>
      </p>
      </>
    );
  }