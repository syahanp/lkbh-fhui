import React from 'react'
import styled from 'styled-components';

const HeroSection:React.FC = ({ children }) => {
    return (
        <Div>
            <br/><br/>

            { children }
        </Div>
    )
}

export default HeroSection;

const Div = styled.div`
    padding: 8rem 0rem;
    background-image: url('/img/landing-hero.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
`
