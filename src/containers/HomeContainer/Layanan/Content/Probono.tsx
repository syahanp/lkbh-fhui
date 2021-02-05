import React from 'react'
import { motion } from 'framer-motion';
import { lighten } from 'polished';
import styled, { useTheme } from 'styled-components'
import Button from 'components/Button';

const Probono = () => {

    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Layanan Pro Bono
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI juga memberikan bantuan hukum berupa pendampingan hukum secara cuma-cuma (Pro Bono). Bantuan hukum ini diberikan kepada masyarakat yang secara ekonomi tidak mampu yang memerlukan jasa hukum Advokat untuk menangani dan menyelesaikan masalah hukum. Layanan Bantuan Hukum diberikan hingga masalah hukumnya selesai dan/atau perkaranya telah mempunyai kekuatan hukum tetap.
                <br/><br/>
                Sesuai dengan Pasal 6 dan Pasal 10 Peraturan Pemerintah No. 42 Tahun 2013 tentang Syarat dan Tata Cara Pemberian Bantuan Hukum dan Penyaluran Dana Bantuan Hukum, untuk mendapatkan bantuan hukum, pemohon harus mengajukan permohonan secara tertulis atau lisan kepada LKBH-PPS FHUI. Permohonan tersebut paling sedikit memuat identitas Pemohon Bantuan Hukum dan uraian singkat mengenai pokok persoalan yang dimintakan Bantuan Hukum. Permohonan tersebut juga harus melampirkan surat keterangan miskin dari Lurah, Kepala Desa, atau pejabat yang setingkat di tempat tinggal Pemohon Bantuan Hukum dan dokumen yang berkenaan dengan Perkara.

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

export default Probono

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`