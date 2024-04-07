// import React, { useContext } from 'react'
// import NoteContex from '../context/notes/NoteContex'

// const Home = () => {
//   const contex = useContext("NoteContex");
//   const {notes,setNotes} = NoteContex;
//   return (
//     <div>
//       <div className="container my-3">
//      <h1>Add Note</h1>
//      <form>
//   <div className="mb-3">
//     <label for="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label for="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3 form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>

// </div>
//      <div className="containe my-3">
//       <h2>Your Notes</h2>
//       {notes.map((notes)=>{
//         return notes.title;
//       })}
//       </div>
//   </div>
//   )}
// export default Home;

import AddNote from '../components/AddNote';
import Notes from './Inotes'; // Import the Notes component


const Home = () => {
  

  return (
    <div>
      
     <AddNote/>
     <Notes/>
    </div>
  );
};

export default Home;
