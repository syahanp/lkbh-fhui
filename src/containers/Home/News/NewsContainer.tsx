import React from 'react'
import SingleHomeNews from './SingleHomeNews'

const NewsContainer = () => {
    return (
        <div className="container">
            <div className="row">
                <SingleHomeNews />
                <SingleHomeNews />
                <SingleHomeNews />
            </div>
        </div>
    )
}

export default NewsContainer
