import './App.css';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';

function App() {
  const [notesList, setNotesList] = useState<any[]>([]);
  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);
  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((note, index) => {
          return <Note note={note} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
