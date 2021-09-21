import NoteContext from "./noteContext";

import react, { useState } from "react";
const NoteState=(props)=>{
const s1={

"name" :"Berlin",
"class":"Exceptional"
}

const [state,setState] =useState(s1);

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


const notesinitial = [
    {
      "_id": "6142f0f4bf3b65144812ff22",
      "user": "6142cd53a89ef3272511f916",
      "title": "my title",
      "description": "las pa rel ",
      "tag": "Bella Ciao",
      "date": "2021-09-16T07:23:32.424Z",
      "__v": 0
    },
    {
      "_id": "6142f116bf3b65144812ff27",
      "user": "6142cd53a89ef3272511f916",
      "title": "my title",
      "description": "las pa rel ",
      "tag": "Bella Ciao",
      "date": "2021-09-16T07:24:06.733Z",
      "__v": 0
    },
    {
      "_id": "6142f118bf3b65144812ff29",
      "user": "6142cd53a89ef3272511f916",
      "title": "my title",
      "description": "las pa rel ",
      "tag": "Bella Ciao",
      "date": "2021-09-16T07:24:08.802Z",
      "__v": 0
    },
    {
      "_id": "6142f11bbf3b65144812ff2b",
      "user": "6142cd53a89ef3272511f916",
      "title": "my title",
      "description": "las pa rel ",
      "tag": "Bella Ciao",
      "date": "2021-09-16T07:24:11.328Z",
      "__v": 0
    }
  ]

const [notes, setNotes] = useState(notesinitial);



const addNote=(title ,description,tag)=>{
  console.log("Adding a new bnote");
const note ={
    "_id": "6142f11bbf3b65144812ff2b",
    "user": "6142cd53a89ef3272511f916",
    "title": title,
    "description": description,
    "tag": tag,
    "date": "2021-09-16T07:24:11.328Z",
    "__v": 0
  };
setNotes(notes.concat(note))

}
const deleteNote=(id)=>{
console.log("deleting Note"+id)
const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
}

const editNode=()=>{


    
}


return(
<NoteContext.Provider value ={{notes,addNote,deleteNote,editNode}}>
{props.children}
</NoteContext.Provider>


)


}
export default NoteState