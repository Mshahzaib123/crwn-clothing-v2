import { createContext, useState, useEffect } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';

export const UserContexts = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, []);
    return <UserContexts.Provider value={value}>{children}</UserContexts.Provider>
}