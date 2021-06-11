import rootReducer, {InitialStateType} from './reducer'
export type actionT = {type: string,payload?: any}
type reducerT = (initialState: InitialStateType ,action: actionT) => InitialStateType

const createCustomStore = (reducer: reducerT, initialState?: object | InitialStateType) => {
    let currentState: InitialStateType | {} = initialState ? initialState : reducer(undefined as any,{type: 'initialization'})

    const listeners = new Map()

    const getState = () => currentState
    const dispatch = (action: actionT) => {
        const newState = reducer(currentState as InitialStateType,action)
        currentState = newState
        listeners.forEach((listener: (state: object) => void) => listener(newState))
    }
    const subscribe = (listener: (state: AppStateType) => void) => listeners.set(listener,listener)
    const unSubscribe = (listener: (state: AppStateType) => void) => listeners.delete(listener)

    return {getState,dispatch,subscribe,unSubscribe}

}

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
const store = createCustomStore(rootReducer as () => InitialStateType)
export type storeT = typeof store
export default store

//@ts-ignore
window.store = store

