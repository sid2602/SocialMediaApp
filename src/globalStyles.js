import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}

    *{
        box-sizing:border-box;
    }

    body{
        overflow-x:hidden;
        margin: 0;
        padding: 0;
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
        
    }
`

export default GlobalStyles;