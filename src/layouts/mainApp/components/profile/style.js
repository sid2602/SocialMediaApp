import styled from 'styled-components'

export const ProfileSection = styled.section`
    width: 300px;
    height: 450px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.50);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    form{}
`;

export const ProfilePhoto = styled.div`
    width: 150px;
    margin: 2em auto 1em auto;
    border: 1px solid #e9e9e9;

    img{
        width: 100%;
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
        color: ${props => props.theme.colors.blue}
    }

    i{
        color: ${props => props.theme.colors.blue};
        margin-right: 0.5em;
    }
    
`;

export const UserData = styled.div`
    font-size: 1.1em;
    color: #707070;
    
    i{
        color: ${props => props.theme.colors.blue};
        margin-right: 0.5em;
        transition: 0.2s;
    }

    div{
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
        color: ${props => props.theme.colors.lightBlue};
    }
`;

export const Input = styled.input`
    outline: 0;
    border: 0;
    border-bottom: 1px solid ${props=>props.theme.colors.gray};
    color: gray;
    width: 200px;
    
`;