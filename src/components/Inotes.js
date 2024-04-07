// import NoteContext from '../context/notes/NoteContext';
// import React, { useContext } from 'react';
// import Noteitem from './Noteitem';
// import AddNote from '../components/AddNote';

// const Notes = () => {
    
//   return (
//     <>
//     <AddNote/>
//     <div className="row my-3">
//         <h2>Your Notes</h2>
//         {notes && notes.map(note => (
//         //   <div>{note.title}</div>
//          <Noteitem note = {note}/>
//         ))}
//       </div>
//       </>
//   )
// }

// export default Notes;



////******************gitcode******************/////
import React, { useContext } from 'react';
import NoteContext from "../context/notes/NoteContext"
import Noteitem from './Noteitem';
import AddNote from './AddNote';

const Notes = () => {
    const { notes } = useContext(NoteContext); // Destructure notes directly from context

    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes && notes.map(note => (
                    <Noteitem key={note._id} note={note} /> // Make sure to provide a unique key prop to each Noteitem
                ))}
            </div>
        </>
    );
}

export default Notes;
