import React, {useState, useEffect} from "react"
import axios from "axios";
const Context = React.createContext()

function UserContext({children}) {
    const [token, setToken] = useState('')
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState({
                                    email:'',
                                    id:0,
                                    username:'', 
                                })
    useEffect(()=>{
        delete axios.defaults.headers.common["Authorization"];

        let  userData = null
        if(localStorage.userData ){
            userData= JSON.parse(localStorage.userData)
        }
        if(userData){
             setIsAuthenticated(true)
             setToken(userData.token)
             setUser(userData.user)
        }
    },[])
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