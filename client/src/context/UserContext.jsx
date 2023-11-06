import {createContext, useEffect, useState} from 'react'

export const userContext = createContext({
    currentUser: {
    _id: '',
    firstName: '',
    lastName: '',
    email: '',
    },
    setCurrentUser: () => {}
})

export const UserContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    useEffect(() => {
    if (localStorage.getItem('currentUser')) {
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')))
    }},['currentUser'])

    return (
    <userContext.Provider value={{ currentUser, setCurrentUser}}>
        {props.children}
    </userContext.Provider>
)
}