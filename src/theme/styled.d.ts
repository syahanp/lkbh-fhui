import 'styled-components';
import { lightTheme } from './theme';

declare module 'styled-components' {
    
    // kenapa hanya lightTheme? karena disini extend object structure supaya
    // bisa autocomplete dan dark/light theme mempunyai stuktur yang sama
    // maka pilih salah satu
    type Theme = typeof lightTheme;

    export interface DefaultTheme extends Theme {}
}