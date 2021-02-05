import { rgba } from 'polished';
import React, { useCallback } from 'react'
import styled from 'styled-components';

interface styledProps {
    isActive: boolean
}

interface Props extends styledProps {
    tabFor: 'konsultasi' | 'pendampingan' | 'lo' | 'mediasi' | 'hki' | 'probono'
    onClick: () => void
}   

const LayananTab: React.FC<Props> = ({ isActive, tabFor, onClick }) => {
    
    const TabIcon = useCallback(() => {
        switch (tabFor) {
            case 'konsultasi':
                return <img src='/img/layanan-icon/konsultasi.svg' />

            case 'pendampingan':
                return <img src='/img/layanan-icon/pendampingan.svg' />

            case 'lo':
                return <img src='/img/layanan-icon/legal_opinion.svg' />

            case 'mediasi':
                return <img src='/img/layanan-icon/mediasi.svg' />

            case 'hki':
                return <img src='/img/layanan-icon/hki.svg' />
            
            case 'probono':
                return <img src='/img/layanan-icon/probono.svg' />
        
            default:
                break;
        }
    }, [])

    const TabLabel = useCallback(() => {
        switch (tabFor) {
            case 'konsultasi':
                return <h4>Konsultasi Hukum</h4>

            case 'pendampingan':
                return <h4>Pendampingan Hukum</h4>

            case 'lo':
                return <h4>Pembuatan Legal Opinion</h4>

            case 'mediasi':
                return <h4>Layanan Mediasi</h4>

            case 'hki':
                return <h4>Pendaftaran HKI</h4>
            
            case 'probono':
                return <h4>Layanan <i>Pro Bono</i></h4>
        
            default:
                break;
        }
    }, [])
    
    return (
        <Div isActive={isActive} onClick={onClick}>
            <TabIcon />
            <TabLabel />
        </Div>
    )
}

export default LayananTab;

const Div = styled.div<styledProps>`
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding: 22px 34px;
    margin-bottom: 12px;
    background-color: ${({theme, isActive}) => isActive ? rgba(theme.pallete.color.secondary, .15) : 'none'};
    box-shadow: ${({theme, isActive}) => isActive ? `0px 8px 15px 3px ${rgba(theme.pallete.color.secondary, .1)}` : 'none'};
    max-width: 420px;
    cursor: pointer;
    transition: all .15s ease-in-out;

    h4 {
        margin-left: 28px;
        margin-bottom: 0px;
        color: ${({theme, isActive}) => isActive ? theme.pallete.color.secondary : theme.pallete.text.secondary};
        transition: all .15s ease-in-out;
    }

    img {
        filter: ${({isActive}) => !isActive ? `grayscale(100%)` : 'none'};
        transition: all .15s ease-in-out;
    }

    &:hover {
        background-color: ${({theme, isActive}) => !isActive ? rgba(theme.pallete.text.secondary, .1) : rgba(theme.pallete.color.secondary, .15 )};
    }
`
