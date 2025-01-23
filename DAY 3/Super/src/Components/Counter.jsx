import { Button } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count, setcount] = useState(0)

    const increment = () => {
        setcount(count + 1)
    }
    const decrement = () => {
        setcount(count - 1)
    }

    return (
        <div class='count'>
            <p>count:{count}</p>
            <Button onClick={increment} color='success'>+</Button>
            <Button onClick={decrement} color='error'>-</Button>
        </div>
    )
}

export default Counter