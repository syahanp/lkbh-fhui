import React from 'react'
import { motion } from 'framer-motion';
import styled from 'styled-components'

const LegalOpnion = () => {
    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Pembuatan Legal Opinion
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI memberikan jasa pembuatan pendapat hukum/legal opinion terkait permasalahan hukum yang sedang dialami ataupun meninjau dokumen-dokumen hukum yang ada. Pendapat hukum dapat digunakan sebagai rujukan untuk penyelesaian sengketa maupun untuk pedoman untuk mengambil suatu tindakan hukum tertentu.
            </motion.h5>
        </Div>
    )
}

export default LegalOpnion;

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`
