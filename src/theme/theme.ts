import { rgba } from 'polished';
import font from 'scss/font.module.scss';

const generalColor = {
    primary: '#E6302E',
    secondary: '#FFB946',
    danger: '#FF2056',
    warning : '#FFB946',
    success : '#2ED47A'
}

const light = {
    pallete: {
        color: generalColor,
        background: {
            white: '#ffffff',
            grey: '#F7F9FA',
            sidebar: ''
        },
        text: {
            primary: '#263238',
            secondary: '#9BA3B5'
        },
        devider: '#E1E1E9',
        form: {
            field: {
                border: '#B9B9B9',
                background: '#ffffff',
                color: '#38404B',
                placeholder: ''
            }
        }
    }
}
  
const dark = {
    
}

const defaultTheme = {
    breakpoint: {
        sm: '576px',
        md: '768px',
        lg: '992px',
    },
    font: {
        size: 16,
        style: {
            primary: font.primary,
        },
        weight: {
            light: font.light,
            regular: font.regular,
            medium: font.medium,
            semi: font.semi,
            bold: font.bold,
            black: font.black
        }
    },
    fn: {
        /**
         * Returns the calculated rem size at given pixel value
         *
         * @param value - size in pixel
         * @returns size in rem
         *
         */
        rem: (value: number):string => {
            let rem = value / defaultTheme.font.size;

            return `${rem}rem`
        }
    }
}

export const lightTheme = {...defaultTheme, ...light}
export const darkTheme = {...defaultTheme, ...dark}