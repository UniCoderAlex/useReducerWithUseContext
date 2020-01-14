import React from 'react';
import { MessageContext } from './context/MessageContext'
import './App.css';
import { useMessageReducer } from './hooks/useMessageReducer';
import MessageContainer from './components/MessageContainer';
import MessageForm from './components/MessageForm'

const App = () => {
    const [state, dispatch] = useMessageReducer([])

    return (
        <MessageContext.Provider value={{state, dispatch}}>
            <MessageForm />
            <MessageContainer />
        </MessageContext.Provider>
    );
}

export default App;
