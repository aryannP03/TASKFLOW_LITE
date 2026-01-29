import React, { useState, useEffect } from 'react'

function useDebounce(value, delay) {
    // console.log(value.length);
    
    const [ debouncedValue, setDebouncedValue ] = useState(value || "")
    useEffect( () => {
        if(value.length>=5) {
            const timerId = setTimeout( () => {
                setDebouncedValue(value)
                }, delay)
                return () => {
                    clearTimeout(timerId)
                    }
        }
    }, [value]) 
    
    return debouncedValue
        
    }

export default useDebounce
