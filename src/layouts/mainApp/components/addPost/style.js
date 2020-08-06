import styled from 'styled-components'

export const Wrapper = styled.article`
    display:flex;
    flex-direction:column;
    margin-bottom: 3em;
    width: 100%;

    @media(max-width: 700px){
        margin-top: 3em;
    }
`;

export const CreatePost = styled.div`
    width: 100%;
    
    box-shadow: 0 3px 14px rgba(0,0,0,0.50);
    border-radius: 5px;
    height: 250px;
    background-color: white;
    color:#707070;
    

    label{
        width: 100%;
        display: block;
        padding: 1em;
        border-bottom: 2px solid #e9e9e9;
    }

    textarea{
        width:100%;
        height: 140px;
        padding: 1em;
        font-size: 2em;
        border: none;
        outline: none;
        color: #707070;
        resize: none;
    }

`;

export const ShareButton = styled.button`
    width:400px;
    border:1px solid ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.lightBlue};
    color: white;
    height:30px;
    line-height: 25px;
    margin:1em auto 0 auto;
    display: block;
    cursor: pointer;
    outline: none;
    border-radius: 10px;
    transition: 0.2s;
    :hover{
        background-color: ${props => props.theme.colors.blue};
    }

    @media(max-width: 700px){
        width: 60%;
    }
`;

