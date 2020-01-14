import React, { useContext } from 'react'
import { MessageContext } from '../context/MessageContext'

const MessageContainer = () => {
    const { state } = useContext(MessageContext)


    return (
        <div className="message-container">
            {state.map((message, index) => (
                <div key={`msg-${index}`} className={`message ${message.type}`}>
                    <span>{message.text}</span>
                </div>
            ))}
        </div>
    );
}
export default MessageContainer;