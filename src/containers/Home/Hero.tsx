import Button from 'components/Button';
import React from 'react'
import styled, { useTheme } from 'styled-components'

const Hero = () => {

    const theme = useTheme();

    return (
        <Div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            Memberikan Solusi Terbaik Untuk Segala <span style={{color: theme.pallete.color.primary}}>Permasalahan Hukum</span> Anda
                        </h1>
                        <p>
                            Nikmati konsultasi hukum yang ditangani langsung oleh pakar dan praktisi Fakultas Hukum Universitas Indonesia dengan harga yang cukup terjangkau.
                        </p>

                        <br/><br/>

                        <Button variant='solid' color='primary' size='large'>
                            KONSULTASI SEKARANG
                        </Button>
                    </div>
                    <div className="col-md-6">
                        <div className='illustration_hero'>
                            <img 
                                className='hero'
                                alt='hero' 
                                src='/img/hero.svg'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    )
}

export default Hero

const Div = styled.div`
    padding: 5rem 0rem;

    p {
        font-size: 18px;
        font-weight: ${({theme}) => theme.font.weight.regular} !important;
        color: ${({theme}) => theme.pallete.text.secondary};
    }

    .illustration_hero {
        padding: 1rem 0rem;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }
`