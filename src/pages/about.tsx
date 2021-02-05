import React from 'react'
import Navbar from 'components/Navbar';
import styled from 'styled-components';
import AboutHeroSection from 'containers/AboutContainer/AboutHeroSection';
import ProfileDetails from 'containers/AboutContainer/ProfileDetails';

const About = () => {
    return (
        <Div>
            <Navbar />

            <AboutHeroSection />

            <ProfileDetails />
        </Div>
    )
}

export default About

const Div = styled.div`

`