import styled from 'styled-components';

export const Header = styled.header`
    height: 50px;
    background-color: ${props => props.theme.colors.lightBlue};
    margin-bottom: 4em;
    // position: fixed;
    width: 100%;
    // z-index: 1200;
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
        font-size: 1.4em;
        list-style-type: none;
        margin: 10px;
        color: white;
        cursor: pointer;
        padding: 5px;
    }

    li:hover{
        color: #dadadb
    }
`;