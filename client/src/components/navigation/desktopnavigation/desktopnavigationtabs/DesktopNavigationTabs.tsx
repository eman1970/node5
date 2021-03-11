  
import React from 'react'
import { useHistory } from 'react-router'
import RoutingPath from '../../../../routes/RoutingPath'
import './DesktopNavigationTabs.css'



export const DesktopNavigationTabs = () => {
    const history = useHistory()

    return (
        <ul className="ulTabsWrapper">
            <li className="liTabs" onClick={() => history.push(RoutingPath.homeView)}>home</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.accessoriesView)}>accessories</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.brandsView)}>brands</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.expertisView)}>expertis</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.newsView)}>news</li>
            <li className="liTabs" onClick={() => history.push(RoutingPath.shopView)}>shop</li>

        </ul>
    )
}