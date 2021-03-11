import React from 'react'
 import './Sidebar.css'
import RoutingPath from '../../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../../shared/provider/UserProvider'
import { Profile } from '../../../profile/Profile'





export const Sidebar = (props: { drawerIsOpen: boolean, drawerHandler: Function }) => {
    const history = useHistory()
    const handleRedirect = (selectedView: string) => {
        history.push(selectedView)
        props.drawerHandler(false)

     

    }
   
    const [authUser, setAuthUser] = useContext(UserContext)
    const displaySignInButtonOnAuthetication = () => {

        return authUser?.username
            ? <div className="profile"><Profile /></div>
            : <span className="signInButton" onClick={() => handleRedirect(RoutingPath.signInView)}>signin</span>
    }



    return (
        <div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
            <button onClick={() => props.drawerHandler(false)}>CLOSE sidebar</button>
 
            <ul className="ulTabsWrapper2">
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.homeView)}>home</li>
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.accessoriesView)}>accessories</li>
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.brandsView)}>brands</li>
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.expertisView)}>expertis</li>
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.newsView)}>news</li>
                <li className="liTabs" onClick={() => handleRedirect(RoutingPath.shopView)}>shop</li>

            </ul>
 
            
            <div className="desktopNavigationTabs2">
    {displaySignInButtonOnAuthetication()}
    </div>


        </div>
    )
}