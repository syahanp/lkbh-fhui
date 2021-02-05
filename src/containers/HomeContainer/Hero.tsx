import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Button from 'components/Button';
import HeroSection from 'components/HeroSection';

const Hero = () => {
    return (
        <HeroSection>
            <Div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="left">
                            <motion.h1
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                            >
                                Memberikan Konsultasi Hukum Tanpa Biaya, Jawaban Terpercaya Dari Permasalahan Anda.
                            </motion.h1>
                            <motion.div
                                className='description'
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .3, duration: .5 }}
                            >
                                LKBH-PPS FHUI siap mengabdi kepada masyarakat, menyalurkan ilmu dalam bentuk konsultasi dan bantuan hukum bagi masyarakat terutama sekitar Depok dan Jakarta.
                            </motion.div>

                            <br/><br/>

                            <motion.div
                                initial={{ scale: .5, opacity: 0, originX: .2, originY: .2 }}
                                animate={{ scale: 1, opacity: 1, originX: .2, originY: .2, display: 'block' }}
                                transition={{ delay: .6, duration: 1, type: 'spring', bounce: .6 }}
                            >
                                <Button variant='neutral' color='primary' size='large' popped>
                                    KONSULTASI SEKARANG
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="right">
                            <motion.div 
                                className='illustration_hero'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: .5 }}
                            >
                                <img 
                                    className='hero'
                                    alt='hero' 
                                    src='/img/consulting-animate.svg'
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Div>
        </HeroSection>
    )
}

export default Hero

const Div = styled.div`

    .left {
        max-width: 550px;

        h1 { 
            color: #fff;
        }
        
        .description {
            font-size: 18px;
            font-weight: 300;
            line-height: 175%;
            color: #FEEAEE;
        }
    }


    .illustration_hero {
        img {
            width: auto;
            height: auto;
            transform: scale(1.25)
        }
    }
`