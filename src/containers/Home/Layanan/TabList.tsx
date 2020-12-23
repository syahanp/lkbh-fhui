import React, { useContext, useState } from 'react'
import LayananTab from 'components/LayananTab'
import { LayananCtx } from '.'
import styled from 'styled-components'

const TabList = () => {
    const {active, setActive} = useContext(LayananCtx)

    return (
        <Div>
            <LayananTab 
                tabFor='konsultasi' 
                isActive={active === 'konsultasi'} 
                onClick={() => setActive('konsultasi')} 
            />
            <LayananTab 
                tabFor='pendampingan' 
                isActive={active === 'pendampingan'} 
                onClick={() => setActive('pendampingan')} 
            />
            <LayananTab 
                tabFor='lo' 
                isActive={active === 'lo'} 
                onClick={() => setActive('lo')} 
            />
            <LayananTab 
                tabFor='mediasi' 
                isActive={active === 'mediasi'} 
                onClick={() => setActive('mediasi')} 
            />
            <LayananTab 
                tabFor='hki' 
                isActive={active === 'hki'} 
                onClick={() => setActive('hki')} 
            />
        </Div>
    )
}

export default TabList;

const Div = styled.div`
    padding-left: 2rem;
`