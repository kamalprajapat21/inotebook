import React, { useState } from "react";
import NoteContext from "./NoteContext";
/*D:\A\Reactjs\03basicReactproject\xnotebook\my-app\src\context\notes\NoteContext.js*/
const NoteState = (props) => {
    const notesInitial = 
    [
      {
        "_id": "65f28c2cb1ce5033fcd2d0b3",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:32.251Z",
        "__v": 0
      },
      {
        "_id": "65f28c2db1ce5033fcd2d0b7",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:33.134Z",
        "__v": 0
      },
      {
        "_id": "65f28c2db1ce5033fcd2d0b9",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:33.306Z",
        "__v": 0
      },
      {
        "_id": "65f28c2db1ce5033fcd2d0bb",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:33.437Z",
        "__v": 0
      },
      {
        "_id": "65f28c2db1ce5033fcd2d0bd",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:33.517Z",
        "__v": 0
      },
      {
        "_id": "65f28c2db1ce5033fcd2d0bf",
        "user": "65f280bde24c24e3e2450ba0",
        "title": "Mytitle",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2024-03-14T05:33:33.692Z",
        "__v": 0
      },
    ]

    const [notes, setNotes] = useState(notesInitial);

    // Add note function
    const addNote = ({ title, description, tag }) => {
      console.log("Adding a New Note")
        const note = {
          "_id": "65f28c2cb1ce5033fcd2d0b3",
          "user": "65f280bde24c24e3e2450ba0",
          "title": "Mytitle",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2024-03-14T05:33:32.251Z",
          "__v": 0
        };
        setNotes(notes.concat(note));
    };


    // Delete note
    const deleteNote = (id) => {
        const updatedNotes = notes.filter(note => note._id !== id);
        setNotes(updatedNotes);
    };

    // Edit note
    const editNote = (id, updatedNote) => {
        const updatedNotes = notes.map(note =>
            note._id === id ? { ...note, ...updatedNote } : note
        );
        setNotes(updatedNotes);
    };

    return (
        <NoteContext.Provider value={( notes, addNote, deleteNote, editNote )}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;


// import NoteContext from "../notes/NoteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//   const host = "http://localhost:5000"
//   const notesInitial = []
//   const [notes, setNotes] = useState(notesInitial)

//   // Get all Notes
//   const getNotes = async () => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVmMjgwYmRlMjRjMjRlM2UyNDUwYmEwIn0sImlhdCI6MTcxMDM5MTYzMn0.c4viS6LlQo9g-pFPKxx_O7jTPCLRc6L7bgTapk8ExqQ"
//       }
//     });
//     const json = await response.json() 
//     setNotes(json)
//   }

//   // Add a Note
//   const addNote = async (title, description, tag) => {
//     // TODO: API Call
//     // API Call 
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });

//     const note = await response.json();
//     setNotes(notes.concat(note))
//   }

//   // Delete a Note
//   const deleteNote = async (id) => {
//     // API Call
//     const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       }
//     });
//     const json = response.json(); 
//     const newNotes = notes.filter((note) => { return note._id !== id })
//     setNotes(newNotes)
//   }

//   // Edit a Note
//   const editNote = async (id, title, description, tag) => {
//     // API Call 
//     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
//       },
//       body: JSON.stringify({title, description, tag})
//     });
//     const json = await response.json(); 

//      let newNotes = JSON.parse(JSON.stringify(notes))
//     // Logic to edit in client
//     for (let index = 0; index < newNotes.length; index++) {
//       const element = newNotes[index];
//       if (element._id === id) {
//         newNotes[index].title = title;
//         newNotes[index].description = description;
//         newNotes[index].tag = tag; 
//         break; 
//       }
//     }  
//     setNotes(newNotes);
//   }

//   return (
//     <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
//       {props.children}
//     </NoteContext.Provider>
//   )

// }
// export default NoteState;