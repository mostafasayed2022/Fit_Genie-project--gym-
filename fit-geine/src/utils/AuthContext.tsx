import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { account } from "../appwriteConfig"
import { useNavigate } from "react-router-dom";
import { ID } from 'appwrite';

// Define a type for the context value
type AuthContextValue = {
    user: any; // Update the type as needed
    loginUser: (userInfo: UserInfo) => Promise<void>;
    logoutUser: () => Promise<void>;
    registerUser: (userInfo: UserInfo) => Promise<void>;
};

// Define a type for userInfo
type UserInfo = {
    name:string
    email: string;
    password: string;
    // Add other properties as needed
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        checkUserStatus()
    }, [])
    
    const loginUser = async (userInfo: UserInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }

        setLoading(false)
    }

    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(null)
    }

    const registerUser = async (userInfo: UserInfo) => {
        setLoading(true)

        try {
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);

            await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            navigate('/')
        } catch(error) {
            console.error(error)
        }

        setLoading(false)
    }

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get();
            setUser(accountDetails)
        } catch(error) {
            console.error(error)
        }

        setLoading(false)
    }

    const contextData: AuthContextValue = {
        user,
        loginUser,
        logoutUser,
        registerUser
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

// Custom Hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export default AuthContext;
