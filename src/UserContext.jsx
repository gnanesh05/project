import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = ()=>useContext(AuthContext)

export const AuthProvider = ({children})=>{
    const [user, setuser] = useState("admin")

    return ( <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>)
}

