import styled from 'styled-components'

export const ProfileSection = styled.section`
    width: 300px;
    height: 425px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.50);
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
`;

export const ProfilePhoto = styled.div`
    width: 150px;
    margin: 2em 0 1em;
    border: 1px solid #e9e9e9;
    
    img{
        width: 100%;
    }

`

export const FullName = styled.header`

    margin-bottom: 1em;
    h2{
        color: ${props => props.theme.colors.blue}
    }
`;

export const UserData = styled.div`
    font-size: 1.1em;
    color: #707070;
    
    i{
        color: ${props => props.theme.colors.blue};
        margin-right: 0.5em;
    }

    div{
        margin-bottom: 1em;
    }

    button{
        margin-top: 1em;
        color: #707070;
        border: 0;
        cursor: pointer;
        padding: 0;
        outline: none;
    }
`;