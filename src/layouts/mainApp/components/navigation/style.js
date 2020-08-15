import styled from 'styled-components';

export const Header = styled.header`
    height: 50px;
    background-color: ${({theme:{colors}}) =>colors.lightBlue};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1200;
   
    nav{
        height: 100%;
    }

    ul{
        padding: 0;
        margin: 0;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
    }

    li{
        list-style-type: none;
        margin: 0.5em; 
    }

    button{
        font-size: 1.4em;
        background-color: transparent;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.5em;
        transition: 0.2s;
        outline: none;
    }

    button:hover{
        color: #dadadb;
    }
`;