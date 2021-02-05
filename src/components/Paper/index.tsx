import React from 'react'
import styled, { useTheme } from 'styled-components';
import { BarLoader } from 'react-spinners';
import { rgba } from 'polished';

interface Props {
    width? : number,
    isLoading? : boolean
}

const Paper: React.FC<Props> = ({ width, isLoading = false, children }) => {
    const theme = useTheme()

    return (
        <Div width={width} isLoading={isLoading}>
            {
                isLoading &&
                <div className='loading_state'>
                    <BarLoader width='100%' height={3} color={theme.pallete.color.secondary} />
                </div>
            }

            { children }
        </Div>
    )
}

export default Paper;

const Div = styled.div<Props>`
    position: relative;
    padding: 2.5rem;
    background-color: #FFF;
    border-radius: 7px;
    width: 450px;
    box-shadow: 0 1px 2px 0 ${rgba('#848484', .2)}, 0 1px 3px 1px ${rgba('#848484', .1)};

    .loading_state {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${rgba('#fff', .5)};
        z-index: 2;
    }
`
