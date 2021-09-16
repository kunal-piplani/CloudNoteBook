import React,{useContext} from 'react'
import noteContext from "../context/note/noteContext"
import Noteitem from './Noteitem';
const Notes = () => {
    const  context = useContext(noteContext)


    const{notes,setNotes}=context;
    return (
        <div>
         <div className="row  my-3" >
<h1>your Notes </h1>
{notes.map((note)=>{

return <Noteitem  key ={note._id } note={note}/>;
})}
</div>   
        </div>
    )
}

export default Notes
