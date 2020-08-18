import styled from 'styled-components'

export const ProfileSection = styled.section`
    width: 300px;
    height: 470px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.50);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    
`;

export const ProfilePhoto = styled.div`
    width: 150px;
    margin: ${props=>props.small? '1em auto' : '2em auto 1em auto'};
    border: 1px solid #e9e9e9;
    max-height: ${props => props.small? '200px': '250px'};
    img{
        
        width: 100%;
        height: 100%;
    }

    .loading{
        display: none;
    }

    input{
        display: block;
        transform: translateX(-14%);
        width: 200px;
    }

`

export const FullName = styled.header`

    margin-bottom: 1em;
    h2{
        color: ${({theme:{colors}})=>colors.blue};
        text-align: center;
    }

    i{
        color: ${({theme:{colors}})=>colors.blue};
        margin-right: 0.5em;
    }
    
`;

export const UserData = styled.div`
    font-size: 1.1em;
    color: #707070;
    
    i{
        color: ${({theme:{colors}})=>colors.blue};
        margin-right: 0.5em;
        transition: 0.2s;
    }

    div{
        text-align: ${props => props.center && 'center'};
        margin-bottom: 1em;
    }

    button{
        
        color: #707070;
        border: 0;
        cursor: pointer;
        padding: 0;
        outline: none;
        padding: 0.5em 0;
        background-color: white;
        margin-right: 1em;
    }

    button:hover i{
        color: ${({theme:{colors}})=>colors.lightBlue};
    }
`;

export const Input = styled.input`
    outline: 0;
    border: 0;
    border-bottom: 1px solid ${({theme:{colors}})=>colors.gray};
    color: gray;
    width: 200px;
    
`;