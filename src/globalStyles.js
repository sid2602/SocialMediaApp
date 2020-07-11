import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
${normalize}
    body{
        
        font-family: "Roboto", sans-serif;
        
    }
`

export default GlobalStyles;