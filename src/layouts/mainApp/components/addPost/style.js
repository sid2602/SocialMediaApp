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
    height: ${props => props.modal? '250px': '200px'};
    background-color: white;
    color:#707070;
    z-index: 1000;
    transition: 0.2s;

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
    display: block;
    transform: ${props => props.modal?'scaleY(1) translateY(0)':'scaleY(0) translateY(-60px)'};
    opacity: ${props => props.modal? '1': '0'};
    transform-origin: top;
    height: 30px;
    line-height: 25px;
    margin:1em auto 0 auto;
   
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

export const Overlay = styled.div`
    position: fixed;
    left: 0;
    top:0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.modal? 'rgba(0,0,0,0.7)': 'none'};
    transition: 0.2s;
    z-index: ${props => props.modal? '1000': '-1000'};
`;