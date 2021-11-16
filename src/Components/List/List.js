import React, { useContext } from "react";
import { UseNoteContext } from "../../Hooks/useContext";

const List = () => {
  const { note } = useContext(UseNoteContext);
  return (
    <div>
      리스트 입니다.
      {note.map((item, index) => {
        return (
          <div key={index}>
            <div>{item.title}</div>
            <div>{item.contents}</div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
