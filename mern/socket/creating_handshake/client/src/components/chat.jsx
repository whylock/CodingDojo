import React, { useState, useEffect } from 'react'

import io from 'socket.io-client'


const Chat = () => {
    const [socket] = useState(() => io(':8000'))
    useEffect(() => {
        socket.on('Welcome', data => console.log(data))
        return () => socket.disconnect(true)
    }, [])
    return (
        <>      
        </>
    )
}

export default Chat
