import React from 'react'

const FetchList = ({pull}) => {
    const poll =pull.read()
    return(
    <div><h5>Hello world</h5>
        <ul>
            {poll.map((p,i) => (
                <li key={i}>{p.name}</li>
            ))}
        </ul>
    </div>
    )
}

export default FetchList
