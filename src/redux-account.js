import {
    createStore
} from 'redux'


//Actions

let WITHDRAW='WITHDRAW'
let DEPOSIT='DEPOSIT'



 export let deposit=()=>{
    return{
        type:DEPOSIT
    }
}

export let withdraw=()=>{
    return{
        type:WITHDRAW
    }
}



//reducers

const Account=(state=20000,action)=>{
    console.log(JSON.stringify(action))

    switch(action.type){
        case WITHDRAW:
            return {
              count: state-1000,
            };

            case DEPOSIT:
                return { 
                    count:state+1000,
                     };

                default:
                   return state;
    }

}

//store

export const store=createStore(Account)



