import './DesktopNavigation.css'
import th2 from '../../../shared/images/th2.png'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../shared/provider/UserProvider'
import { Profile } from '../../profile/Profile'
import { DesktopNavigationTabs } from './desktopnavigationtabs/DesktopNavigationTabs'

export const DesktopNavigation = () => {
    const history = useHistory()
    const [authUser, setAuthUser] = useContext(UserContext)

    const displaySignInButtonOnAuthetication = () => {

        return authUser?.username
            ? <div className="profile"><Profile /></div>
            : <span className="signInButton" onClick={() => history.push(RoutingPath.signInView)}>signin</span>
    }

    return (
        <div className="desktopNavigationWrapper">

            <img onClick={() => history.push(RoutingPath.homeView)} className="navigationLogotype"
                src={th2}
                alt={''} />
                <DesktopNavigationTabs />

<div className="desktopNavigationTabs">
    {displaySignInButtonOnAuthetication()}
    </div>
           
        </div>
    )
}

 
