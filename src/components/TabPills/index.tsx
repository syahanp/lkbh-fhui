import { rgba } from 'polished'
import React from 'react'
import styled from 'styled-components'

interface styledProps {
    isActive: boolean
}

interface Props extends styledProps {
    value: string
    onClick?: () => void
}

const TabPills:React.FC<Props> = ({ value, isActive, onClick }) => {
    return (
        <Div isActive={isActive} onClick={onClick}>
            { value }
        </Div>
    )
}

export default TabPills

const Div = styled.div<styledProps>`
    padding: .6rem 1rem;
    margin-bottom: .2rem;
    color: ${({theme, isActive}) => isActive ? theme.pallete.color.secondary : theme.pallete.text.primary};
    font-weight: ${({theme}) => theme.font.weight.medium};
    background-color: ${({theme, isActive}) => isActive ? rgba(theme.pallete.color.secondary, .15) : 'none'};
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: ${({theme, isActive}) => !isActive ? rgba(theme.pallete.text.secondary, .1) : rgba(theme.pallete.color.secondary, .15 )};
    }
`