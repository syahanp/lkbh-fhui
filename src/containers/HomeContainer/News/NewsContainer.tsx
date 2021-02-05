import { blog } from 'api'
import React, { useEffect, useState } from 'react'
import SingleHomeNews from './SingleHomeNews'

const NewsContainer = () => {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        blog.get('/blogs')
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err.response);
        })

    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    !isLoading &&
                    data.map(x => {
                        return (
                            <SingleHomeNews 
                                key={x.slug}
                                id={x.id}
                                title={x.title}
                                desc={x.description}
                                img={x.image.formats.thumbnail.url}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default NewsContainer
