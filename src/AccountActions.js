import React, {useState, useEffect} from 'react'
import { store,withdraw,deposit } from './redux-account'


const AccountActions=()=>{

    const [disabled,setDisabled]=useState(false)
 

    useEffect(()=>{
        store.subscribe(()=>{
            var state=store.getState();
            setDisabled(disabled)
        })
    },[])

    let deposit=()=>{
        store.dispatch({type:'DEPOSIT'})
    }

    let withdraw=()=>{
        store.dispatch({type:'WITHDRAW'})
    }

    return (
        <div>
            <button onClick={deposit}>DEPOSIT</button>
            <button onClick={withdraw} disabled={disabled}>WITHDRAW</button>
        </div>
    )
}

export default AccountActions;