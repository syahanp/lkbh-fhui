import React, { useContext } from 'react';
import Advokat from './Advokat';
import Sejarah from './Sejarah'
import VisiMisi from './VisiMisi';
import Kepemimpinan from './Kepemimpinan';
import { PROFILE_DETAILS_CTX } from '..';

const Content = () => {

    const { tabActive } = useContext(PROFILE_DETAILS_CTX)

    switch (tabActive) {
        case 'sejarah':
            return <Sejarah />
        case 'visimisi':
            return <VisiMisi />
        case 'kepemimpinan':
            return <Kepemimpinan />
        case 'advokat':
            return <Advokat />

        default:
            break;
    }
}

export default Content
