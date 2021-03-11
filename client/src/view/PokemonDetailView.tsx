import React from 'react'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import { useState, useEffect } from 'react'

export const PokemonDetailView = () => {

    const [data, setData] = useState<any>([])
    const location = useLocation<any>()

    const fetchData = async () => {
        const { data } = await Axios.get(location.state.url)
        setData(data)

    }

    useEffect(() => {
        fetchData()
    })

    const displayData = () => {
        return <div>
            <img src={data?.sprites?.front_default} alt={''} />
            <h1>{data.name}</h1>
            <h1>{data.height}</h1>
            <h1>{data.weight}</h1>
        </div>

    }

    return (
        <div>
            <h1>Detailed view about pokemon</h1>
            <button onClick={() => console.log(location.state.url)}>x</button>
            {displayData()}

        </div>
    )
}
