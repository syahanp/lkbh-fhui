import React, { createContext, useState } from 'react'
import styled from 'styled-components'
import Content from './Content'
import TabList from './TabList'

export const LayananCtx = createContext(null)

const Layanan = () => {
    const [active, setActive] = useState('konsultasi')

    let value = {active, setActive}

    return (
        <LayananCtx.Provider value={value}>
            <Div>
                <div className="section-title">
                    <h3>Pelajari Layanan yang Sesuai Untuk Anda</h3>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <Content />
                        </div>
                        <div className="col-md-5">
                            <TabList />
                        </div>
                    </div>
                </div>
            </Div>
        </LayananCtx.Provider>
    )
}

export default Layanan

const Div = styled.div`
    padding: 6rem 0rem;
    background-color: ${({theme}) => theme.pallete.background.grey};

    .section-title {
        margin-bottom: 5rem;
        text-align: center;
    }
`