import React, { useState, createContext } from 'react'


type User = {
    userData: any,
    setUserData: any,
    userRepo: any,
    setUserRepo: any
}

export const context = createContext< User | null >(null);

export const ContextProvider = (props: any) => {
    const[userData, setUserData] = useState({})
    const[userRepo, setUserRepo] = useState([])

    return(
        <context.Provider value = {{
            userData, setUserData,
            userRepo, setUserRepo
        }}>
            {props.children}

        </context.Provider>
    )
}