import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({children}) =>{
    const[isSidebar , setIsSidebar] = useState(false);
    const [mobileShow , setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider
        value={{ isSidebar , setIsSidebar , mobileShow , setMobileShow}}
        > 
        {children}
        </UtilsContext.Provider>
    );
};

export const useUtils =() =>{
    const utilsContext = useContext(UtilsContext);

    if(!utilsContext) return null;
    
    return utilsContext;
}

{/* This is used for making responsive */}

{/* New things I learn 
    1. Optional channing 
    2. useParams
    3. Rapid Api
    4. Context Api
    5. useContext
    6. React Icons ( npm i react-icons )
    7. rfce for react code shortcut 
    8. Tailwind CSS*/}
