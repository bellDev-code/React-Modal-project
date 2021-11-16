import React, { createContext, useState } from "react";

export const UseNoteContext = createContext(undefined);

const noteData = [
  {
    id: null,
    title: "",
    contents: "",
  },
];

export const UseNoteContextProvider = ({ children }) => {
  const [note, setNote] = useState(noteData);

  const addTextOnSubmit = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const contents = event.target[1].value;

    console.log(title, contents);

    addNote(title, contents);
  };

  const addNote = (title, contents) => {
    const text = {
      id: note.length,
      title: title,
      contents: contents,
    };

    const newNote = [...note, text];

    console.log(newNote);

    setNote(newNote);
  };
  return (
    <UseNoteContext.Provider
      value={{
        noteData: noteData,
        note: note,
        addTextOnSubmit: addTextOnSubmit,
        addNote: addNote,
      }}
    >
      {children}
    </UseNoteContext.Provider>
  );
};
