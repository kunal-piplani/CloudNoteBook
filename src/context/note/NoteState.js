import NoteContext from "./noteContext";

import react, { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:4000";
  const s1 = {
    name: "Berlin",
    class: "Exceptional",
  };

  const [state, setState] = useState(s1);

  // const update =()=>{

  //     setTimeout(() => {
  //         setState({
  //         "name":"nairobi",
  //         "class":"Good "
  //         })
  //     }, 1000);
  // }

  // return(
  // <NoteContext.Provider value ={{state,update}}>
  // {props.children}
  // </NoteContext.Provider>

  // )

  const notesinitial = [];

  const [notes, setNotes] = useState(notesinitial);


//GET All Notes 
const getNotes = async () => {

  const response = await fetch(
    `${host}/api/notes/fetchallnotes`,
    {
      method: "GET", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmNkNTNhODllZjMyNzI1MTFmOTE2In0sImlhdCI6MTYzMTc2ODAwOH0.lgjE6rOJfQOw8fAs2CU_9EN2AXUJ6NJTbUT5sRcILy4",
      },
     
    }
  );

const json =await response.json();
console.log(json);
setNotes(json)

 
};




//Add Notes 
  const addNote = async (title, description, tag) => {

    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmNkNTNhODllZjMyNzI1MTFmOTE2In0sImlhdCI6MTYzMTc2ODAwOH0.lgjE6rOJfQOw8fAs2CU_9EN2AXUJ6NJTbUT5sRcILy4",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );




    console.log("Adding a new bnote");
    const note = {
      _id: "6142f11bbf3b65144812ff2b",
      user: "6142cd53a89ef3272511f916",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-16T07:24:11.328Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  const deleteNote = (id) => {
    console.log("deleting Note" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  const editNode = async (id, title, description, tag) => {
    //API CALLS
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "POST", // *GET, POST, PUT, DELETE, etc.

        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE0MmNkNTNhODllZjMyNzI1MTFmOTE2In0sImlhdCI6MTYzMTc2ODAwOH0.lgjE6rOJfQOw8fAs2CU_9EN2AXUJ6NJTbUT5sRcILy4",
        },
        body: JSON.stringify({title,description,tag}),
      }
    );
    const json= response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNode ,getNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
