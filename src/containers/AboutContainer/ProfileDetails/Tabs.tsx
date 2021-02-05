import React, { useContext } from 'react';
import TabPills from 'components/TabPills';
import styled from 'styled-components';
import { PROFILE_DETAILS_CTX } from '.'

const Tabs = () => {
    const { tabActive, setTabActive } = useContext(PROFILE_DETAILS_CTX)

    return (
        <Div>
            <h5>PROFIL</h5>
            <TabPills 
                value='Sejarah' 
                isActive={tabActive === 'sejarah'} 
                onClick={() => setTabActive('sejarah')}
            />
            <TabPills 
                value='Visi dan Misi' 
                isActive={tabActive === 'visimisi'} 
                onClick={() => setTabActive('visimisi')}
            />

            <br/>

            <h5>STRUKTUR ORGANISASI</h5>
            <TabPills 
                value='Kepemimpinan' 
                isActive={tabActive === 'kepemimpinan'} 
                onClick={() => setTabActive('kepemimpinan')}
            />
            <TabPills 
                value='Advokat LKBH' 
                isActive={tabActive === 'advokat'} 
                onClick={() => setTabActive('advokat')}
            />
        </Div>
    )
}

export default Tabs;

const Div = styled.div`
    padding-right: 1rem;

    h5 {
        color: ${({theme}) => theme.pallete.text.secondary};
        font-weight: ${({theme}) => theme.font.weight.medium};
    }
`
