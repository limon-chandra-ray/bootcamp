import React from 'react'
import OneData from './OneData'

const AllData = ({pulldata}) => {
    const posts = pulldata.read()
    return (
        <div>
            <ul>
                {posts.map((post, i) => (
                    <OneData key={i} odata={post}/>
                ))}
            </ul>
        </div>
    )
}

export default AllData
