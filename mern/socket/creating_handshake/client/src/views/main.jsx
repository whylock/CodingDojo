import React, {useState} from 'react'
import User from '../components/chatForm'


const Main = (props) => {
    const [Username, setUsername] = useState("")

    const onInputChange = (e) => {
        e.preventDefault()
        setUsername({
            ...Username,
            [e.target.name]:e.target.value
        })
    }

    const onFormSubmit = (e) => {
        
    }
    
    return (
        <div>
            <User
                input={Username}
                handleChange={onInputChange}
                handleSubmit={onFormSubmit}
                submitValue="Start Chatting"
            />
        </div>
    )
}

export default Main