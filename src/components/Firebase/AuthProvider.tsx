import React, { ReactNode } from "react";
import context, { AuthAPI } from "./context";
import useFirebase from "./Firebase";

interface Props {
  children: ReactNode;
}

const firebase = useFirebase();
const AuthProvider: React.FC<Props> = ({ children }) => {
  return <context.Provider value={{} as AuthAPI}>{children}</context.Provider>;
};

export default AuthProvider;
