import { useState, useEffect } from 'react'

const getWindowsDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }

}

export const useWindowsDimensions = () => {
    const [windowsDimensions, setWindowsDimensions] = useState(getWindowsDimensions)
    const handleResize = () => { setWindowsDimensions(getWindowsDimensions()) }

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowsDimensions

}