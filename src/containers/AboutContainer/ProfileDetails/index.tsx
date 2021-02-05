import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Content from './Content';
import Tabs from './Tabs';

export const PROFILE_DETAILS_CTX = createContext(null)

const ProfileDetails = () => {
    const [tabActive, setTabActive] = useState('sejarah');

    let contextState = { tabActive, setTabActive }

    return (
        <PROFILE_DETAILS_CTX.Provider value={contextState}>
            <Div className='container'>
                <div className="row">
                    <div className="col-lg-3">
                        <Tabs />
                    </div>
                    <div className="col-lg-9">
                        <Content />
                    </div>
                </div>
            </Div>
        </PROFILE_DETAILS_CTX.Provider>
    )
}

export default ProfileDetails

const Div = styled.div`
    padding: 5rem 0rem;
`