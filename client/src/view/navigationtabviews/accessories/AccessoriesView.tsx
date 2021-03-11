import React from 'react'
import { useEffect, useState } from 'react'
import PokemonAPIService from '../../../shared/api/service/PokemonAPIService'
import ClipLoader from 'react-spinners/ClipLoader';
import {UseDebounce} from '../../../hooks/UseDebounce'

 

export const AccessoriesView = () => {
    const [pokemonData, setPokemonData] = useState<any>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [search, setSearch] = useState<string>('')
    const debouncedSearchTerm = UseDebounce(search, 500)

    const fetchData = async () => {
        try {

       
        setLoading(true)
        const { data } = await PokemonAPIService.searchPokemon(search)
        setPokemonData(data)
        console.log(data)
        setLoading(false)
    } catch(error) {
        console.log(error)
    }

    
    }

    const displayData = () => {
        return <div>
            <img src={pokemonData?.sprites?.front_default} alt={''} />
            <h1>Name: {pokemonData.name}</h1>
            <h1>Height: {pokemonData.height}</h1>
            <h1>Weight: {pokemonData.weight}</h1>

        </div>
    }


    useEffect(() => {

        fetchData()
    }, [debouncedSearchTerm])



    return (
        <div>
            <input placeholder='WHOS THAT POKEMON?' onChange={event => setSearch(event.target.value)} />
            {!loading ? displayData() : <ClipLoader color={'red'} loading={loading} size={150} />}
        </div>

    )
}