import { createContext, useState } from "react";

const AuthContext = createContext({
    userName: null,
    isAuthenticated: false,
    updateUser: (user) => {},
    updateAuth: (auth) => {},
});


export const AuthContextProvider = (props) => {
    const [user, setUser] = useState();
    const [auth, setAuth] = useState(false);
    
    const updateUser = (user) => setUser(user);
    const updateAuth = (auth) => setAuth(auth);

    const context = {
        userName: user,
        isAuthenticated: auth,
        updateUser,
        updateAuth
    };
    return <AuthContext.Provider value={context}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;