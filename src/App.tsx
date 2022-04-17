import './App.css';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';
import INote from './interfaces/note.interface';

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);

  //rendering the first time
  useEffect(() => {
    const listFromLocalStorage = localStorage.getItem('my_notes');
    if (listFromLocalStorage) {
      const listFromLocalStorageArray = JSON.parse(listFromLocalStorage);
      setNotesList(listFromLocalStorageArray);
    } else {
      setNotesList(DUMMY_NOTES);
    }
  }, []);

  const updateNoteItem = (updatedNote: INote) => {
    // temporary variable with new list
    const updatedList = notesList.map((note) => {
      if (note._id === updatedNote._id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    // store to local storage
    const notesListString = JSON.stringify(updatedList);
    localStorage.setItem('my_notes', notesListString);
    // update noteList with new list and rerender
    setNotesList(updatedList);
  };

  return (
    <div className="App">
      <div className="notes-list">
        {notesList.map((note, index) => {
          return <Note note={note} onNoteUpdate={updateNoteItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
