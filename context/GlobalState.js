import React, {createContext, useReducer} from 'react'


const intialState = {
    transaction= [
        { id:1, text: 'Flower', ammount: -199},
        { id:2, text: 'Sallary', ammount: 199},
        { id:3, text: 'Gas', ammount: -19},
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children })=>{
    const [state, dispach] = useReducer(AppReducer, initialState);


    return ( <GlobalContext.Provider>
                {children}
         </GlobalContext.Provider> )
}    