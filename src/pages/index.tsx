import Head from 'next/head'
import styled from 'styled-components';
import Hero from 'containers/Home/Hero';
import Layanan from 'containers/Home/Layanan';
import News from 'containers/Home/News';
import Navbar from 'components/Navbar';

const Home = () => {
    return (
        <Div>
            <Navbar />

            <Hero />

            <Layanan />

            <News />
        </Div>
    )
}

export default Home;

const Div = styled.div`

`