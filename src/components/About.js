// import React,{useContext, useEffect} from 'react'
// import NoteContext from "./NoteContex";

// const About = (props) => {
//   const a = useContext(NoteContext)
  
// return (
//  <div>
//   THis is About page
//  </div>
// );
// }

// export default About



import React, { useContext } from 'react';
// import {NoteContext} from './notes/NoteContex'; // Importing NoteContext
// import NoteContext from './context/notes/NoteContext'; // Importing NoteContext
import NoteContext from "../context/notes/NoteContext"

const About = () => {
  const contextData = useContext(NoteContext); // Accessing context data using useContext hook
  
  return (
    <div>
      <h2>This is the About page</h2>
      <p>Context data: {JSON.stringify(contextData)}</p>
    </div>
  );
}

export default About;
