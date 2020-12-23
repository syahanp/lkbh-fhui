import React, { useContext } from 'react'
import styled from 'styled-components';
import { LayananCtx } from '../'
import Konsultasi from './Konsultasi';
import Pendampingan from './Pendampingan';
import LegalOpinion from './LegalOpnion';
import Mediasi from './Mediasi';
import Hki from './Hki';

const Content = () => {
    const { active } = useContext(LayananCtx);

    switch (active) {
        case 'konsultasi':
            return <Konsultasi />
        case 'pendampingan':
            return <Pendampingan />
        case 'lo':
            return <LegalOpinion />
        case 'mediasi':
            return <Mediasi />
        case 'hki':
            return <Hki />
    
        default:
            break;
    }
}

export default Content;

const Div = styled.div`

`
