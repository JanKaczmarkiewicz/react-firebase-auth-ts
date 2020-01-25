import { createContext } from "react";
export interface AuthAPI {}

const context = createContext<AuthAPI | null>(null);

export default context;
