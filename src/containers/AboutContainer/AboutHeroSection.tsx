import React from 'react'
import styled from 'styled-components';
import HeroSection from 'components/HeroSection';
import { motion } from 'framer-motion';
import { useTheme } from '@material-ui/styles';

const AboutHeroSection = () => {

    return (
        <HeroSection>
            <Div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="left">
                            <motion.h5
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: .5 }}
                            >
                                TENTANG KAMI
                            </motion.h5>
                            <motion.h1
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .3, duration: .5 }}
                            >
                                LKBH - PPS FH UI
                            </motion.h1>
                            <motion.div
                                className='description'
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: .5, duration: .5 }}
                            >
                                LKBH - PPS adalah kepanjangan dari Lembaga Konsultasi Bantuan Hukum dan Pilihan Penyelesaian Sengketa yang dibentuk khusus dibawah naungan Fakultas Hukum Universitas Indonesia
                            </motion.div>
                        </div>

                    </div>
                    <div className="col-lg-6">
                        <div className="right">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1, duration: .5 }}
                            >
                                <img alt='hero' src='/img/profile.jpg'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Div>
        </HeroSection>
    )
}

export default AboutHeroSection;

const Div = styled.div`
    .left {
        max-width: 480px;

        h5 {
            color: ${({theme}) => theme.pallete.color.secondary};
            font-weight: 500;
            margin-bottom: 0rem !important;
        }
        h1 {
            color: #fff;
            margin-bottom: 1.25rem;
        }
        .description {
            font-size: 18px;
            font-weight: 300;
            line-height: 175%;
            color: #FEEAEE;
        }
    }

    .right {
        display: flex;
        justify-content: center;

        img {
            width: auto;
            height: auto;
            max-width: 500px;
            border-radius: 5px;
        }
    }
`
