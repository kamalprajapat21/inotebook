
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'; // Import the Home component
import About from './components/About'; // Import the About component
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
// import NoteState from './components/notes/NoteState'; // Corrected import path
// D:\A\Reactjs\03basicReactproject\xnotebook\my-app\src\contex\notes\NoteContex.js

 function App() {
  return (
    <>
   <NoteState>
    <Router> {/* Wrap your routes with the Router component */}
      <Navbar />
      <Alert message="This is amaning"/>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />} /> {/* Specify the Home component for the root path */}
        <Route path="/about" element={<About />} /> {/* Specify the About component for the /about path */}
      </Routes>
      </div>
      {/* <h1>This is Xnotebook</h1> */}
    </Router>
    </NoteState>
    </>
  );
}
export default App;
