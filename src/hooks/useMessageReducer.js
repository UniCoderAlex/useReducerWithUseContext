import { useReducer } from 'react'
import { messageReducer } from '../reducers/messageReducer'

export const useMessageReducer = (initialState = []) => {
    return useReducer(messageReducer, initialState)
}