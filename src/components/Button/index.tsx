import React from 'react';
import styled, { useTheme } from 'styled-components';
import { rgba } from 'polished';
import { makeStyles } from '@material-ui/styles';
import { BtnProps, BtnStyledProps } from './types';
import { motion } from 'framer-motion';

const Button = React.forwardRef<HTMLAnchorElement, BtnProps>(
    ({
        variant,
        color,
        size = 'medium',
        disabled = false,
        fullWidth = false,
        href,
        onClick,
        children,
    }, ref
) => {

    const theme = useTheme();
    const useStyle = makeStyles({
        solidPrimary: {
            backgroundColor: theme.pallete.color.primary,
            color: '#fff'
        },
        solidSecondary: {
            backgroundColor: theme.pallete.color.secondary,
            color: '#fff'
        },
        solidDanger: {
            backgroundColor: theme.pallete.color.danger,
            color: '#fff'
        },
        outlinePrimary: {
            border: `1px solid ${theme.pallete.color.primary}`,
            color: theme.pallete.color.primary,
            transition: 'all .2s ease-in-out',
            '&:hover': {
                color: '#fff',
                backgroundColor: theme.pallete.color.primary,
            }
        },
        outlineSecondary: {
            border: `1px solid ${theme.pallete.color.secondary}`,
            color: theme.pallete.color.secondary,
            transition: 'all .2s ease-in-out',
            '&:hover': {
                color: '#fff',
                backgroundColor: theme.pallete.color.secondary,
            }
        },
        outlineDanger: {
            border: `1px solid ${theme.pallete.color.danger}`,
            color: theme.pallete.color.danger,
            transition: 'all .2s ease-in-out',
            '&:hover': {
                color: '#fff',
                backgroundColor: theme.pallete.color.danger,
            }
        },
        outlineNeutral: {
            border: `1px solid ${theme.pallete.devider}`,
            color: theme.pallete.text.primary,
            '&:hover': {
                color: theme.pallete.text.primary,
                backgroundColor: rgba(theme.pallete.devider, .4)
            }
        },
        neutralPrimary: {
            backgroundColor: '#fff',
            boxShadow: `0 1px 2px 0 ${rgba('#848484', .2)}, 0 1px 3px 1px ${rgba('#848484', .1)}`,
            color: theme.pallete.color.primary,
            '&:hover': {
                color: theme.pallete.color.primary
            }
        },
        neutralSecondary: {
            backgroundColor: '#fff',
            boxShadow: `0 1px 2px 0 ${rgba('#848484', .2)}, 0 1px 3px 1px ${rgba('#848484', .1)}`,
            color: theme.pallete.color.secondary,
            '&:hover': {
                color: theme.pallete.color.secondary
            }
        },
        neutralDanger: {
            backgroundColor: '#fff',
            boxShadow: `0 1px 2px 0 ${rgba('#848484', .2)}, 0 1px 3px 1px ${rgba('#848484', .1)}`,
            color: theme.pallete.color.danger,
            '&:hover': {
                color: theme.pallete.color.danger
            }
        },
        small: {
            padding: '7px 14px',
            fontSize: '14px'
        },
        medium: {
            padding: '12px 1.2rem',
            fontSize: '16px'
        },
        large: {
            padding: '1.4rem 2rem',
            fontSize: '16px'
        }
    })

    const style = useStyle()
    let btnVariant:any, 
        btnSize:any

    switch (variant) {
        case 'solid':
            if (color === 'primary') btnVariant = style.solidPrimary
            else if (color === 'secondary') btnVariant = style.solidSecondary
            else if (color === 'danger') btnVariant = style.solidDanger
            break;

        case 'outline' :
            if (color === 'primary') btnVariant = style.outlinePrimary
            else if (color === 'secondary') btnVariant = style.outlineSecondary
            else if (color === 'danger') btnVariant = style.outlineDanger
            else if (color === 'neutral') btnVariant = style.outlineNeutral
            break;
        
        case 'neutral' :
            if (color === 'primary') btnVariant = style.neutralPrimary
            else if (color === 'secondary') btnVariant = style.neutralSecondary
            else if (color === 'danger') btnVariant = style.neutralDanger
            break;

        default:
            break;
    }

    switch (size) {
        case 'small':
            btnSize = style.small
            break;
        case 'medium':
            btnSize = style.medium
            break;
        case 'large':
            btnSize = style.large
            break;
    
        default:
            break;
    }

    return (
        <ButtonElement
            ref={ref}
            href={href}
            onClick={onClick}
            fullWidth={fullWidth}
            disabled={disabled}
            className={`${btnVariant} ${btnSize}`}
            whileHover={{ scale: 1.1 }}
        >
            { children }
        </ButtonElement>
    )
})

export default Button;

const ButtonElement = styled(motion.a)<BtnStyledProps>`
    display: inline-block;
    text-decoration: none;
    cursor: pointer;
    border-radius: 5px;
    width: ${({fullWidth}) => fullWidth ? `100%` : 'auto'};
    text-align: center;

    &:hover {
        text-decoration: none;
        color: #fff;
    }
`
