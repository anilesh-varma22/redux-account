import React, {useState, useEffect} from 'react'
import { store } from './redux-account';


const Display=()=>{
    const [count, setCount]=useState(20000);

    useEffect(()=>{
        store.subscribe(()=>{
            var count=store.getState();
            setCount([count]);
        })
    },[])

    return (
        <div>
            <h1>My Account</h1>
            <h3>Amount-{count}</h3>
        </div>
    )
}

export default Display;