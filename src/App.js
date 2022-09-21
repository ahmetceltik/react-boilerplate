import React from 'react';
import { useState } from 'react';

import Button from '@mui/material/Button';

export default function App() {

    const [counter, setCounter] = useState(0);

    return (
        <div style={{display: 'flex', flexDirection:'column', alignItems: 'center', textAlign: 'center', justifyContent: 'space-evenly'}}>
            <h2>I want to play a game</h2>
            <h4>You clicked me {counter} times</h4>
            <Button variant='outlined' onClick={() => {
                setCounter(counter + 1)
            }}> I am clickable! </Button>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, sunt!</p>
            <h1 style={{color: 'pink', fontSize: '80px'}}> SCOPERSKI IS A BITCH </h1>
        </div>
    )
}