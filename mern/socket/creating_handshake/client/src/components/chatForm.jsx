import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const User = (props) => {
    const {input, handleChange, handleSubmit, submitValue} = props
    return (
        <div className="container">
            <div className='bg-info border border-dark'>
                <h1>MERN CHAT</h1>
            </div>
            <div className="p-3 mt-3 border border-dark">
                <h1>Get started right now!</h1>
                <form className='mt-5' onSubmit={handleSubmit}>
                <p>I want to start starting with the name...</p>
                    <input type="text" name="username" id="username" value={input.username} onChange={handleChange} />
                    <input type="submit" value={submitValue}/>
                </form>
            </div>
        </div>
    )
}

export default User
