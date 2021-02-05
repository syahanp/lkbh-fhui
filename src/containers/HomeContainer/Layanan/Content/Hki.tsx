import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'

const Hki = () => {
    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Pendaftaran Kekayaan Intelektual
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI memberikan jasa konsultasi terkait pendaftaran Kekayaan Intelektual (Hak Cipta, Merek, Paten, Desain Industri, dan Desain Tata Letak Sirkuit Terpadu). Pendaftaran KI akan dilakukan oleh Konsultan KI terdaftar di Direktorat Jenderal Kekayaan Intelektual, Kementerian Hukum dan Hak Asasi Manusia.
            </motion.h5>
        </Div>
    )
}

export default Hki;

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`
