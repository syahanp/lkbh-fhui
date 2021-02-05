import React from 'react';
import styled from 'styled-components';

const VisiMisi = () => {
    return (
        <Div>
            <h1>Visi dan Misi</h1>

            <br/>
            
            <p>
                <b>Visi</b> <br/>
                Mencerdaskan dan membantu masyarakat Indonesia di bidang Hukum, sehingga masyarakat mendapatkan rasa keadilan, terlindungi sehingga tercipta masyarakat yang adil makmur dan sejahtera.
            </p>

            <p>
                <b>Misi</b>
                <ol>
                    <li>Membangun masyarakat Indonesia menjadi masyarakat madani, mampu menanggulangi masalah-masalah hukum secara menyeluruh.</li>
                    <li>Mewujudkan Tri Darma Perguruan Tinggi khususnya dalam bidang pengabdian masyarakat.</li>
                    <li>Menjalankan fungsi bantuan hukum kepada masyarakat yang tidak mampu sebagai perwujudan cita-cita dari Fakultas Hukum Universitas Indonesia.</li>
                </ol>
            </p>
        </Div>
    )
}

export default VisiMisi

const Div = styled.div`

`