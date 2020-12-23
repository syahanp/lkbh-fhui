import React from 'react'
import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled, { useTheme } from 'styled-components'
import Button from 'components/Button';

const Konsultasi = () => {

    const theme = useTheme();

    return (
        <Div>
            <motion.h2
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .5 }}
            >
                <span style={{color: theme.pallete.color.primary}}>Konsultasi Hukum</span> Dengan Praktisi Secara Daring dan Tatap Muka
            </motion.h2>

            <motion.h5
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .5 }}
            >
                Nikmati konsultasi hukum yang ditangani langsung oleh pakar dan praktisi Fakultas Hukum Universitas Indonesia dengan keunggulan yang akan anda dapatkan :
                <ul>
                    <li>Konsultasi dapat dilakukan secara daring dan tatap muka</li>
                    <li>Harga terjangkau untuk semua kalangan</li>
                    <li>Layanan pro-bono bagi yang tidak mampu</li>
                    <li>Data pribadi anda akan terjamin kerahasiaannya</li>
                </ul>
            </motion.h5>

            <br/>

            <motion.div
                initial={{ scale: 0, originX: .25, originY: .25 }}
                animate={{ scale: 1, originX: .25, originY: .25, display: 'block' }}
                transition={{ delay: .8, type: 'spring' }}
            >
                <Button variant='neutral' color='primary' size='large'>
                    PELAJARI LEBIH LANJUT
                </Button>
            </motion.div>
        </Div>
    )
}

export default Konsultasi

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
    h5 {
        color: ${({theme}) => lighten(.2, theme.pallete.text.primary)};
    }
`