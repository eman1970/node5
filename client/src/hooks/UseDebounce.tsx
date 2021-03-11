import React from 'react'
import { useState, useEffect } from 'react'

export const UseDebounce = (searchValue: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(searchValue)

    useEffect(() => {
        const handler = setTimeout(() => { setDebounceValue(searchValue) }, delay)
        return () => { clearTimeout(handler) }
    }, [searchValue])
    return debounceValue
}





