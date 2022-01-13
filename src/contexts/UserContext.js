import React, {useState, useEffect} from "react"

const Context = React.createContext()

function UserContext({children}) {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({
                                    email:'',
                                    id:0,
                                    username:'', 
                                })
    
    return (
        <Context.Provider value={{
            token, 
            setToken, 
            isAuthenticated, 
            setIsAuthenticated, 
            user, 
            setUser
        }}>
            {children}
        </Context.Provider>
    )
}

export {UserContext, Context}