import React from 'react'
import { useState, createContext }  from 'react'

export const TestContext = createContext<any>(null)

export const TestProvider = (props: {children: React.ReactChild}) => {
 
const [testUser, setTestUser] = useState(['test']);
 
const {children} = props 


    return (
        <TestContext.Provider value={[testUser, setTestUser]}>
            {children}
            </TestContext.Provider>
    )
}

export default TestContext;