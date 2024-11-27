import React, {createContext, ReactNode, useState} from "react";


interface AuthValue {
  isToggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthValue | null>(null);

interface AuthProviderProps {
    children: ReactNode;
  }

export default function AuthProvider({children}: AuthProviderProps){

  const [isToggle, setToggle] = useState(false);


  
  return (
       <AuthContext.Provider value={{isToggle, setToggle}}>
          {children}
       </AuthContext.Provider>
  )
}