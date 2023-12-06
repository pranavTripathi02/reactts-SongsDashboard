import React, { createContext, useState } from "react";

type AuthType = {
    isAuth: boolean;
    user_phoneNumber: string;
};

type Props = {
    children?: React.ReactNode;
};

const AuthContext = createContext<AuthType | null>(null);

const AuthProvider = ({ children }: Props) => {
    const [auth, setAuth] = useState<AuthType | null>(null);
    return (
        // @ts-expect-error dont-know
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
