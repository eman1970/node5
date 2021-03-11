import React from 'react'
import { useState, createContext }  from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: {children: React.ReactChild}) => {
 
const [authUser, setAuthUser] = useState();
 
const {children} = props 


    return (
        <UserContext.Provider value={[authUser, setAuthUser]}>
            {children}
            </UserContext.Provider>
    )
}

export default UserContext;