import styled from 'styled-components'

export const Wrapper = styled.article`
    width: 100%;
    height: 200px;
    background-color: white;
    box-shadow: 0 3px 14px rgba(0,0,0,0.50);
    display: flex;
    margin-bottom: 2em;
    position: relative;
    cursor: pointer;
    
`;

export const PostContent = styled.div`
    flex: 2;
    border: 1px solid #e9e9e9;
    padding: 1em;
    

    h2{
        color: ${props => props.theme.colors.blue};
        margin-top: 0;
    }

    p{
        display: block;
        height: 70px;
        overflow: hidden;
    }

    @media(max-width: 700px){

        p{
            font-size: 0.9em;
        }

        flex: auto;
    }

    @media(max-width: 500px){

        padding: 1em 0 0 1em;
        border: 0;
        p{
            font-size: 0.7em;
        }
    }

`;

export const ImageDiv = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
    // justify-content: center;
    overflow-y: hidden;

    img{
        width: 100%;
        // height: 100%;
    }

    @media(max-width: 700px){
        min-width: 150px;
       
    }

    @media(max-width: 400px){
        align-self: center;
        min-width: 75px;
        height: 100px;
        margin-right: 1em;
    }
`;

export const Actions = styled.div`
    display flex;
    
    padding: 1em;
    

    button{
        border: none;
        color: ${({theme:{colors},active})=>active? colors.lightBlue:colors.blue };
        outline: none;
        cursor: pointer;
        background-color: white;
    }

    button i{
        transition: 0.2s;
    }

    button:hover i{
        color: ${props => props.theme.colors.lightBlue};
    }

    @media(max-width: 700px){
        button{
            font-size: 0.8em;
        }
    }
`;

