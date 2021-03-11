import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/HomeView'
import { SignInView } from '../view/SignInView'
import RoutingPath from './RoutingPath'
import { UserContext } from '../shared/provider/UserProvider'
import { useEffect, useContext } from 'react'
import { AccessoriesView } from '../view/navigationtabviews/accessories/AccessoriesView'
import { BrandsView } from '../view/navigationtabviews/brands/BrandsView'
import { ExpertisView } from '../view/navigationtabviews/expertis/ExpertisView'
import { NewsView } from '../view/navigationtabviews/news/NewsView'
import { ShopView } from '../view/navigationtabviews/shop/ShopView'
import { SettingsView} from '../view/authenticatedviews/SettingsView'
import {PokemonDetailView} from '../view/PokemonDetailView'

export const Routes = (props: { children: React.ReactChild }) => {
    const [authUser, setAuthUser] = useContext(UserContext)
    const { children } = props

    const blockRouteIfAuthenticated = (allowedView: React.FC, notAllowedView: React.FC) => {
      return !authUser ? allowedView :  notAllowedView 
    }    

    const authenticationRequired = (allowed: React.FC, notAllowed: React.FC) => {
return authUser ? allowed : notAllowed

    }

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setAuthUser({ username: localStorage.getItem('user') })
        }
    }, [])

    return (
        <BrowserRouter>
            {children}
            <Switch>
                <Route exact path={RoutingPath.homeView} component={HomeView} />
                <Route exact path={RoutingPath.signInView} component={blockRouteIfAuthenticated(SignInView, HomeView)} />
                <Route exact path={RoutingPath.accessoriesView} component={AccessoriesView} />
                <Route exact path={RoutingPath.brandsView} component={BrandsView} />
                <Route exact path={RoutingPath.expertisView} component={ExpertisView} />
                <Route exact path={RoutingPath.newsView} component={NewsView} />
                <Route exact path={RoutingPath.shopView} component={ShopView} />
                <Route exact path={RoutingPath.settingsView} component={authenticationRequired(SettingsView, SignInView)} />
                <Route exact path={RoutingPath.pokemonDetailView()} component={PokemonDetailView} />
                <Route component={HomeView} />

            </Switch>

        </BrowserRouter>
    )


}