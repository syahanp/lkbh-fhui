import React from 'react'
import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled, { useTheme } from 'styled-components'
import Button from 'components/Button';

const Konsultasi = () => {

    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Konsultasi Hukum
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI memberikan jasa konsultasi hukum mengenai perkara pidana, perdata, tata usaha negara, perselisihan perburuhan, hak kekayaan intelektual, dan lain-lain. Konsultasi hukum tidak dikenakan biaya apapun dan dilakukan secara tatap muka di kantor LKBH-PPS FHUI sesuai jam kerja. Konsultasi hukum juga dapat dilakukan secara daring melalui aplikasi zoom selama maksimal 40 menit sesuai waktu yang disepakati, dengan membayar biaya komitmen sebesar Rp. 100.000,- (seratus ribu rupiah). Silakan membuat akun dan mengisi identitas anda untuk membuat janji temu dengan advokat yang bertugas. 
            </motion.h5>

            <br/>

            {/* <motion.div
                initial={{ scale: .5, opacity: 0, originX: .2, originY: .2 }}
                animate={{ scale: 1, opacity: 1, originX: .2, originY: .2, display: 'block' }}
                transition={{ delay: .4, duration: 1, type: 'spring', bounce: .6 }}
            >
                <Button variant='neutral' color='primary' size='large' popped>
                    PELAJARI LEBIH LANJUT
                </Button>
            </motion.div> */}
        </Div>
    )
}

export default Konsultasi

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`