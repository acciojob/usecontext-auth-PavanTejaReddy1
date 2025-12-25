import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [isAuthenticated, setAuthenticated] = useState(false);

    const toggle = () => {
        return setAuthenticated(!isAuthenticated);
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, toggle}}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider};
