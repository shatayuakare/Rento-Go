import { createContext, useContext, useState } from "react"
import { Cookies } from "react-cookie";
import { decodeToken } from "react-jwt"
export const AuthContext = createContext();


export default function AuthProvider({ children }) {

    const cookie = new Cookies()
    const token = cookie.get("token");
    const initialauthUser = decodeToken(token)

    const [authUser, setAuthUser] = useState(
        initialauthUser ? (initialauthUser.user) : undefined
    )

    return (
        <AuthContext.Provider value={[authUser, setAuthUser]}>
            {children}
        </AuthContext.Provider >
    )
}

export const useAuth = () => useContext(AuthContext);