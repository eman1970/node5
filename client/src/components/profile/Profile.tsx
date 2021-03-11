import React from 'react'
import { useContext } from 'react'
import './Profile.css'
import { UserContext } from '../../shared/provider/UserProvider'
import { ProfileDropdown } from './profiledropdown/ProfileDropdown'


export const Profile = () => {
    const [authUser, setAuthUser] = useContext(UserContext)
    return (
        <div className="profileWrapper">
                 <div id="username">{ authUser.username}</div>

            <img className="profileImg" src={'https://thispersondoesnotexist.com/image'} alt="Profile" />
                       <ProfileDropdown />
                       
                       
             
            </div>
       
       


    )
}
