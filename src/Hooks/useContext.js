import React, { createContext, useState } from "react";

export const UseNoteContext = createContext(undefined);

const noteData = [];

export const UseNoteContextProvider = ({ children }) => {
  const [note, setNote] = useState(noteData);

  const addTextOnSubmit = (event) => {
    event.preventDefault();

    const title = event.target[0].value;
    const contents = event.target[1].value;

    addNote(title, contents);
  };

  const addNote = (title, contents, imageTitle, imgUrl) => {
    const text = {
      id: note.length,
      title: title,
      contents: contents,
      imageTitle: imageTitle,
      imgUrl: imgUrl,
    };

    console.log(text);

    const newNote = [...note, text];

    console.log(newNote);

    setNote(newNote);
  };

  const addImageUrlOnSubmit = (event) => {
    event.preventDefault();

    const imageTitle = event.target[0].value;
    const imgUrl = event.target[1].value;

    addNote(imageTitle, imgUrl);
  };

  return (
    <UseNoteContext.Provider
      value={{
        noteData: noteData,
        note: note,
        addTextOnSubmit: addTextOnSubmit,
        addNote: addNote,
        addImageUrlOnSubmit: addImageUrlOnSubmit,
      }}
    >
      {children}
    </UseNoteContext.Provider>
  );
};
