import { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';
import { calculatePxToRem } from './ThemeHelper';

export const GlobalStyle = createGlobalStyle`

    * {
        font-family: 'Heebo', sans-serif;
    }

    // sreen size
    --screen-xm: ${({theme}) => theme.breakpoint.sm};
    --screen-md: ${({theme}) => theme.breakpoint.md};
    --screen-lg: ${({theme}) => theme.breakpoint.lg};

    body {
        background-color: ${({theme}) => theme.pallete.background.white} !important;
    }

    a {
        text-decoration: none;
        color: ${({theme}) => theme.pallete.color.primary};

        &:hover {
            text-decoration: none;
        }
    }
    
    h1, h2, h3, h4, h5 {
        /* margin-top: 0rem !important;
        margin-bottom: 0rem !important; */
    }

    h1 {
        font-size: ${calculatePxToRem(36)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
        margin-bottom: 1rem;
    }
    h2 {
        font-size: ${calculatePxToRem(32)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};;
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h3 {
        font-size: ${calculatePxToRem(28)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h4 {
        font-size: ${calculatePxToRem(22)};
        line-height: 1.5;
        font-weight: ${({theme}) => theme.font.weight.medium};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }
    h5 {
        font-size: ${calculatePxToRem(18)};
        line-height: 175%;
        font-weight: ${({theme}) => theme.font.weight.light};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }

    p {
        font-size: 1rem;
        line-height: 175%;
        margin-bottom: 0rem;
        font-weight: ${({theme}) => theme.font.weight.light};
        font-family: ${({theme}) => theme.font.style.primary};
        color: ${({theme}) => theme.pallete.text.primary};
    }

    hr {
        border: ${({theme}) => `1px solid ${theme.pallete.devider}`};
    }

    ul {
        margin: 8px 0px;
        
        li {
            line-height: 175%;
        }
    }

    input, textarea {
        color: ${({theme}) => theme.pallete.form.field.color} !important;
        background-color: ${({theme}) => theme.pallete.form.field.background} !important;
        border: ${({theme}) => `1px solid ${theme.pallete.form.field.border}`} !important;
        transition: all .2s ease-in-out;

        &::placeholder {

        }

        &:focus {
            border: ${({theme}) => `1px solid ${theme.pallete.text.primary}`} !important;
            box-shadow: none !important;
            box-shadow: 0;
        }
    }

    label {
        color: ${({theme}) => theme.pallete.text.primary};
        font-weight: ${({theme}) => theme.font.weight.medium};
    }

    // progress bar custom styling
    #nprogress .bar {
        background: ${({theme}) => theme.pallete.color.success} !important;
        height: 3px !important;
        box-shadow: ${({theme}) => `0px 3px 15px 0px ${rgba(theme.pallete.color.success, .5)}`};
    }


    #nprogress .spinner-icon {
        border-top-color: ${({theme}) => theme.pallete.color.success};
        border-left-color: ${({theme}) => theme.pallete.color.success};
    }
`