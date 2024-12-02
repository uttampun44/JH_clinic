import React, {createContext, ReactNode, useState} from "react";


interface AuthValue {
  isToggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export const AuthContext = createContext<AuthValue>({
  isToggle: false,
  setToggle: () => {}
});

interface AuthProviderProps {
    children: ReactNode;
  }

export default function AuthProvider({children}: AuthProviderProps){

  const [isToggle, setToggle] = useState(true);


  
  return (
       <AuthContext.Provider value={{isToggle, setToggle}}>
          {children}
       </AuthContext.Provider>
  )
}