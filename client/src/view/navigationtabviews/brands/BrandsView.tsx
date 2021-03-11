import React from 'react'
import { useContext, useEffect } from 'react'
import { TestContext } from '../../../shared/provider/TestProvider';
import PokemonAPIService from '../../../shared/api/service/PokemonAPIService'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'

export const BrandsView = () => {
    const history = useHistory()
    const [testUser, setTestUser] = useContext(TestContext)
    const [pokemon, setPokemon] = useState<any>([])


    const fetchData = async () => {
        const { data } = await PokemonAPIService.getAllPokemon()
        setPokemon(data)
    }

    useEffect(() => {

        fetchData()
    })

    const displayData = () => {
        return <div>
            {pokemon.results?.map((x: any) =>
                <div key={x.name}>

                    <h1 onClick={() => history.push(RoutingPath.pokemonDetailView(x.name), x)}>{x.name}</h1>
                    </div>
            )}

            </div>
    }
    return (
        <div>
                <h1>This is the brandsView</h1>
                {testUser.map((x: any, i: number) => <div><span>{x}</span><br /></div>)}
                <br />
                <button onClick={() => console.log(pokemon)}>TestAPI</button>
                {displayData()}
            </div>
    )
}