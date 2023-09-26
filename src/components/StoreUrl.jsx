import { createContext, useState } from "react";


const urlInital={url:"",name:""};

export const ContextUrl=createContext();

const StoreUrl=(props)=> {
    const [urlState,setUrlState]=useState(urlInital);

    return (
        <ContextUrl.Provider value={[urlState,setUrlState]}>{props.children}</ContextUrl.Provider>
    );
};

export default StoreUrl;