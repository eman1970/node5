import React from 'react'
import { useContext, useState } from "react";
import './NewsView.css'

import { TestContext } from '../../../shared/provider/TestProvider';


export const NewsView = () => {
    const [testUser, setTestUser] = useContext(TestContext)
    const [inputValue, setInputValue] = useState<any>('')

    const updateGlobalList = (x: any) => {
      setTestUser(testUser.concat(x))
      setInputValue('')
    }

    const handleSubmit = () =>{
       
       
        // clearing the values
        setTestUser([]);   
    
    
    }

 
 
       

    return (
        <div>

            <h1>This is the newsView</h1>
           {testUser.map((x: any, i: number)=><div><span>{x}</span><br /></div>)}
        
            <input className="testForm" value={inputValue} placeholder="update testUser (also on brandsView)" onChange={event => setInputValue(event.target.value)} />
            <button onClick={() => updateGlobalList(inputValue)}>Add to list</button>
            <button onClick={() => console.log(testUser)}>Console</button>
            <button onClick={() => handleSubmit()}>Clear</button>
        
       
            
        </div>

    )

}

export default NewsView