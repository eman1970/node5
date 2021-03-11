import React from 'react'
import './ProfileDropdown.css'
import { useContext } from 'react'
import { UserContext } from '../../../shared/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'




export const ProfileDropdown = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const logout = () => {
        setAuthUser(false)
        localStorage.removeItem('user')
        history.push(RoutingPath.homeView)

    }

    return (
        <div className="dropdown-content">
            <span><a href="#">profile</a></span><br />
            <span onClick={() => history.push(RoutingPath.settingsView)}><a href="#">settings</a></span><br />
             <span onClick={() => logout()}><a href="#">signout</a></span>
        </div>
    )
}
