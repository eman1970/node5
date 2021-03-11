import React from 'react'
import './BackDrop.css'

export const BackDrop = (props: {drawerHandler: Function}) => {
    return (
         <div onClick={() => props.drawerHandler(false)} className="backDrop">
            
        </div>
    )
}
