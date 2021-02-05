import React from 'react';
import feather from 'feather-icons';
import { useTheme } from 'styled-components';

interface Props {
    type : string
    color? : string
    size? : number 
    strokeWidth? : number
    className? : string
}

const Icon: React.FC<Props> = ({ 
    type,
    color,
    size = 24,
    strokeWidth = 2,
    className = ''
}) => {
    const theme = useTheme()

    return (
        <span 
            dangerouslySetInnerHTML={{
                __html: feather.icons[type].toSvg({
                    'color' : color || null,
                    'width' : size,
                    'height' : size,
                    'stroke-width' : strokeWidth,
                    class: className
                })
            }}
        />
    )
}

export default Icon;
