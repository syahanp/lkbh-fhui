import React from 'react';
import styled from 'styled-components';

const Sejarah = () => {
    return (
        <Div>
            <h1>Sejarah Singkat</h1>

            <br/>
            
            <p>
            LKBH-PPS FHUI merupakan sebuah Lembaga Konsultasi dan Bantuan Hukum yang dinaungi oleh Fakultas Hukum Universitas Indonesia dan bertujuan untuk melakukan kegiatan pengabdian masyarakat dengan jalan membangun supremasi hukum, membantu dan memberikan pemahaman di kalangan masyarakat, baik masyarakat yang mampu maupun masyarakat yang tidak mampu, serta memberikan kontrol sosial terhadap perilaku aparat penegak hukum dalam penegakan hukum di masyarakat. Selain itu, LKBH-PPS FHUI yang didirikan pada tahun 1967 ini merupakan wadah yang dibentuk untuk melaksanakan sosialisasi produk-produk hukum, baik itu berupa Undang-undang yang dibuat Dewan Perwakilan Rakyat bersama Pemerintah, maupun Peraturan-peraturan yang berada di bawahnya kepada masyarakat secara luas.
            </p>

            <p>
            Ide awal pembentukkan LKBH-PPS FHUI adalah untuk memberikan ruang kepada pada dosen yang selalu setiap saat berada di kampus dalam rangka memberikan ilmu pengetahuan kepada para Mahasiswa untuk dapat mempraktikkan keilmuannya dalam suatu perkara. Bukan hanya sebagai advokat yang berperkara, akan tetapi sebagai Saksi Ahli yang keterangannya diperlukan dalam suatu perkara. Ide tersebut kemudian berkembang menjadi sebuah lembaga yang dapat membantu masyarakat secara luas tidak hanya beracara dipersidangan, namun juga untuk konsultasi dan penyelesaian permasalahan lainnya. Sekaligus pula sebagai lembaga yang dapat menelurkan sarjana-sarjana hukum yang sudah siap menjawab tantangan didunia hukum sebagai pengacara/lawyer.
            </p>

            <p>
            LKBH-PPS FHUI yang berisi kumpulan-kumpulan Advokat yang berada di bawah naungan Organisasi Advokat yang sah, Para Sarjana Hukum, dan juga mahasiswa-mahasiswa yang kesemuanya lulusan dari Fakultas Hukum Universitas Indonesia ini mempunyai visi untuk berperan aktif dalam mencerdaskan dan sekaligus pula membantu masyarakat Indonesia dibidang Hukum sehingga masyarakat Indonesia mendapatkan rasa keadilan, terlindungi secara hukum, dan ikut serta dalam menciptakan masyarakat adil dan makmur. Sedangkan misi daripada LKBH-PPS FHUI adalah mampu menyelesaikan berbagai permasalahan hukum secara komprehensif dan menyeluruh, dan membangun masyarakat Indonesia menjadi masyarakat madani, sekaligus pula mewujudkan Tri Dharma Perguruan Tinggi, khususnya dalam bidang pendidikan dan pengajaran dan bidang pengabdian masyarakat.
            </p>
        </Div>
    )
}

export default Sejarah

const Div = styled.div`
    p {
        text-align: justify;
        margin-bottom: 1rem;
    }
`