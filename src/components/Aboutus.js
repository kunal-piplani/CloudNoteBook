import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/note/noteContext'
import { useEffect } from 'react'
function Aboutus() {

    const a =useContext(noteContext)

    useEffect(() => {
        a.update();
        
    }, [])
    return (
        <div>
            This is about us ,{a.state.name}
        </div>
    )
}

export default Aboutus
