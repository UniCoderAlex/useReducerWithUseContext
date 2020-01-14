import React, { useState, useContext, Fragment } from 'react'
import { MessageContext } from '../context/MessageContext'

const MessageForm = () => {
    const [text, setText] = useState('')
    const { dispatch } = useContext(MessageContext)
    const createMessage = (e) => {
        e.preventDefault()
        const newMessage = { type: 'warning', text }
        dispatch({
            type: 'ADD',
            payload: newMessage
        })
        setText('')
    }

    const clearMessages = () => {
        dispatch({
            type: 'CLEAR',
        })
    }
    return (
        <Fragment>
            <form onSubmit={createMessage}>
                <input type={text} value={text} onChange={e => setText(e.target.value)} />
                <input type="submit" value="post message" />
            </form>
            <button onClick={clearMessages}>Clear</button>
        </Fragment>
    )
}

export default MessageForm