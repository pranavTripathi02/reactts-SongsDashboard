import React, { createContext, useEffect, useState } from "react";

type AuthType = {
  token?: string;
  user?: {
    _id: string;
    firstName?: string | null;
  };
};
type SignInAuthType = {
  phoneNumber: string;
  message?: string;
  requestId?: string;
  isVerfied?: boolean;
};

// type AuthContextType = {
//   auth: AuthType;
//   setAuth: (authObj: AuthType) => void;
// };

type Props = {
  children?: React.ReactNode;
};

const AuthContext = createContext<any>(null);

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<AuthType>({});
  const [signInAuth, setSignInAuth] = useState<SignInAuthType>({
    isVerfied: false,
    phoneNumber: "",
  });
  const fetchToken = async () => {
    const localToken = localStorage.getItem("token") || "";
    const localTokenCreated = localStorage.getItem("tokenCreated");
    if (localToken.length > 1 && localTokenCreated) {
      const localTokenValid =
        Date.now() - parseInt(localTokenCreated) <= 120000;
      if (localToken && localTokenValid) {
        setAuth({ token: localToken });
      }
    }
  };
  // using localstorage to persist session for 2 minutes
  // since unable to set cookies through back-end
  useEffect(() => {
    fetchToken();
  }, []);

  return (
    <AuthContext.Provider value={{ signInAuth, setSignInAuth, auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
