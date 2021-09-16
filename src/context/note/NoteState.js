import NoteContext from "./noteContext";

import react, { useState } from "react";
const NoteState=(props)=>{
const s1={

"name" :"Berlin",
"class":"Exceptional"
}

const [state,setState] =useState(s1);

const update =()=>{


    setTimeout(() => {
        setState({
        "name":"nairobi",
        "class":"Good "
        })
    }, 1000);
}

return(
<NoteContext.Provider value ={{state,update}}>
{props.children}
</NoteContext.Provider>


)
}
export default NoteState