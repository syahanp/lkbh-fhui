import Head from 'next/head'
import styled from 'styled-components';
import Hero from 'containers/HomeContainer/Hero';
import Layanan from 'containers/HomeContainer/Layanan';
import News from 'containers/HomeContainer/News';
import Navbar from 'components/Navbar';

const Home = () => {
    return (
        <Div>
            <Navbar />

            <Hero />

            <Layanan />
        </Div>
    )
}

export default Home;

const Div = styled.div`

`