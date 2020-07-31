import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
    body{
        
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
    }
`

export default GlobalStyles;