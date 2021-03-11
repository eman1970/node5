import React from 'react'
import './Navigation.css'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { DesktopNavigation } from './desktopnavigation/DesktopNavigation'
import { useWindowsDimensions } from '../../hooks/useWindowsDimensions'

export const Navigation = () => {
    const { height, width } = useWindowsDimensions()

    const displayNavigationDependingOnDevice = () => {
        return (width <= 1000)
            ? <MobileNavigation />
            : <DesktopNavigation />
    }

    return (
        <div>
         {displayNavigationDependingOnDevice()}
        </div>
    )
}
