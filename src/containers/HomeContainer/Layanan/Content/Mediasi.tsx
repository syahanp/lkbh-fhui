import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'

const Mediasi = () => {
    return (
        <Div>
            <motion.h2
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .4 }}
            >
                Layanan Mediasi
            </motion.h2>

            <motion.h5
                initial={{ y: 15, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: .2, duration: .4 }}
            >
                LKBH-PPS FHUI memberikan jasa penyelesaian sengketa di luar pengadilan melalui mediasi. Mediasi merupakan salah satu solusi penyelesaian sengketa yang lebih efektif dan efisien yang memuaskan semua pihak, dengan berlandaskan pada itikad baik dan menjunjung tinggi keadilan. Mediator dari LKBH-PPS FHUI akan bertindak sebagai pihak ketiga yang netral yang akan membantu para piha yang bersengketa mencapai kesepakatan yang win-win solution.
            </motion.h5>
        </Div>
    )
}

export default Mediasi;

const Div = styled.div`
    h2 {
        margin-bottom: 1.25rem;
    }
`
