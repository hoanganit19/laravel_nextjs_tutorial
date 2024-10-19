"use client";
import { createContext } from "react";
export const UserContext = createContext();
export default function UserProvider({ children, token }) {
  return (
    <UserContext.Provider value={{ token }}>{children}</UserContext.Provider>
  );
}
