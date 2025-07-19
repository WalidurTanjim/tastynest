import { createContext, useState } from "react";
import { LoggedinUserType } from "../types/loggedinUserType";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState<LoggedinUserType | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const value = {
        user, loading
    };

    return <AuthContext.Provider value={value}></AuthContext.Provider>
};

export default AuthProvider;