import React, {useCallback, useContext, useEffect, useRef, useState} from "react";
import store, {storeT} from "../store";
export const ReduxContext = React.createContext(store)

interface providerType {
    children: React.ReactNode,
    store: storeT
}

export const CustomProvider: React.FC<providerType> = ({children, store}) => {
    return (
      <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
    )
}

const isEqual = (a: any, b: any): boolean => a === b


export const useCustomSelector = (selector: (state: any) => any, funcEqual = isEqual)  => {

    if (!selector) {
        throw new Error(`You must pass a selector to useCustomSelector`)
    }
    if (typeof selector !== 'function') {
        throw new Error(`You must pass a function as a selector to useCustomSelector`)
    }
    if (typeof funcEqual !== 'function') {
        throw new Error(
            `You must pass a function as an equality function to useCustomSelector`
        )
    }

    const [, RenderStart] = useState(0)
    const store: storeT  = useContext(ReduxContext);
    const selectorRef = useRef(selector);
    const selectedStateRef = useRef(selector(store.getState()));


    const checkForUpdates = useCallback((state) => {
        const newState = selectorRef.current(state)
        if (!funcEqual(newState,selectedStateRef.current)){
            selectedStateRef.current = newState
            RenderStart(prev => prev + 1);
        }
    }, []);

    useEffect(() => {
       const unsub = store.subscribe(checkForUpdates);
        return () => {unsub(checkForUpdates)}
    }, []);

    return selectedStateRef.current;
}


export const useCustomDispatch = () => {
    const store: storeT = useContext(ReduxContext)
    return store.dispatch
}
