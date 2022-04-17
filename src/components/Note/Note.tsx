import React, { FC, FocusEvent } from 'react';
import INote from '../../interfaces/note.interface';
import './Note.css';
type Props = {
  note: INote;
  onNoteUpdate: (note: INote) => void;
};

const Note: FC<Props> = ({ note, onNoteUpdate }) => {
  const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
    let newTextValue = event.currentTarget.textContent;
    if (newTextValue === note.text) {
      return;
    }
    const updatedNoteObject: INote = {
      ...note,
      text: newTextValue || '',
    };
    onNoteUpdate(updatedNoteObject);
  };

  return (
    <div className="note">
      <div
        className="note__text"
        onBlur={noteTextUpdated}
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        {note?.text}
      </div>
      <div className="note__link">
        <a href={note?.link}>{note?.link}</a>
      </div>
    </div>
  );
};

export default Note;
