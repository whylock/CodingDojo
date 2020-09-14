import React from 'react'

export default function Color(props) {
    const style = {
        color: props.color1,
        backgroundColor:props.color2
    }
    return (
        <div>
            <p style={style}>The word is: props.word</p>
        </div>
    )
}
