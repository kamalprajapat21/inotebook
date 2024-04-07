// // import React, { createContext, useState } from 'react';

// // export const NoteContext = createContext();

// // const NoteContextProvider = (props) => {
// //   const [notes, setNotes] = useState([]);

// //   const addNote = (title, description, tag) => {
// //     // Implementation of addNote function
// //     // For demonstration purposes, let's just log the note
// //     console.log("Adding note:", { title, description, tag });
// //     const newNote = { title, description, tag };
// //     setNotes([...notes, newNote]);
// //   };

// //   return (
// //     <NoteContext.Provider value={{ notes, addNote }}>
// //       {props.children}
// //     </NoteContext.Provider>
// //   );
// // };

// // export default NoteContextProvider;


// // NoteContext.js

// import React, { createContext, useState } from 'react';

// // Create a new context
// export const NoteContext = createContext();

// // Create NoteProvider component to wrap around your application
// const NoteProvider = (props) => {
//   const [notes, setNotes] = useState([]);

//   // Define addNote function
//   const addNote = (title, description, tag) => {
//     // Your addNote logic here
//     const newNote = { title, description, tag };
//     setNotes([...notes, newNote]);
//   };

//   return (
//     <NoteContext.Provider value={{ notes, addNote }}>
//       {props.children}
//     </NoteContext.Provider>
//   );
// };

// export default NoteProvider;


import { createContext } from "react";

const NoteContext = createContext();

export default NoteContext;