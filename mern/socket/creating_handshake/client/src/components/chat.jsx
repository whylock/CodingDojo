import React, { useState, useEffect } from 'react'
import io from 'socket.io-client'


const Chat = () => {
    const [socket] = useState(() => io(':8000'))

    const handleRegister = (onMessage) => {
        socket.on('message', onMessage)
    }

    const handleUnregister = () => {
        socket.off('message')
    }

    socket.on('error', (err) => {
        console.log(`Socket Error: ${err}`)
    })
    
    const register = (name, cb) => {
        socket.emit('register', name, cb)
    }

    const join = (chat, cb) => {
        socket.emit('join', chat, cb)
    }
    
    const leave = (chat, cb) => {
        socket.emit('leave', chat, cb)
    }

    const message = (chat, msg, cb) => {
        socket.emit('message', {chat, message:msg}, cb)
    }

    const getChat = (cb) => {
        socket.emit('chat', null, cb)
    }

    const getUsers = (cb) => {
        socket.emit('Users', null, cb)
    }

    function onRegister(username, callback) {
        if (!clientManger.isUserAvaiable(username)) return callback('user is not available')
        const user = clientManger.getUserBy(username)
        return callback(null, user)
    }

    function onEvent(chatroomName, newEntry) {
        return validChatAndUser(chatroomName)
            .then(function ({ chatroom, user }){ 
                const entry = { user, ...newEntry }
                chatroom.addEntry(entry)

                chatroom.notifcation({ chat: chatroomName, ...entry })
                return chatroom
            })
    }

    return (
        <>      
        </>
    )
}

export default Chat
