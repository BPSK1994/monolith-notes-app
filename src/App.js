import React from 'react';
import Sidebar from "./sidebar/Sidebar";
import NotesList from './NotesList';
import NotesEditor from './NotesEditor';


function App() {
  return (
    <div className = "container">
      <Sidebar/>
      <NotesList />
      <NotesEditor />
    </div>
  );
}

export default App;
