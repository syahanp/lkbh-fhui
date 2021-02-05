import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'

const Pendampingan = () => {
    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Pendampingan Hukum
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI memberikan pelayanan jasa pendampingan hukum terkait sengketa yang sedang dialami di berbagai persoalan hukum antara lain perkara pidana, perdata, tata usaha negara, perselisihan perburuhan, dan kekayaan intelektual. Pendampingan hukum yang dapat diberikan untuk kasus pidana dari tingkat penyidikan di kepolisian dan/atau di kejaksaan, persidangan di pengadilan, sampai dengan pengajuan upaya hukum yang ada. Untuk perkara perdata, pendampingan hukum yang dapat diberikan dalam proses penyelesaian sengketa antara lain melalui negosiasi, mediasi, maupun persidangan di pengadilan. Pendampingan hukum diberikan dengan menjunjung tinggi etika, profesionalitas dan tanggung jawab penuh, serta mengedepankan prinsip- prinsip idealisme dan kejujuran demi memberikan pelayanan terbaik kepada masyarakat. 
            </motion.h5>
        </Div>
    )
}

export default Pendampingan

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`