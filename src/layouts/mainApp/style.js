import styled from 'styled-components'

export const Container = styled.main`
    width: 1000px;
    min-height: 90vh;
    padding: 1em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

   

    @media(max-width: 1020px){
        flex-direction:column;
        align-items: center;
        width: 650px;
    }

    @media(max-width: 700px){
        width: 100%;
    }
    
`;

export const PostsWrapper = styled.section`
    width: 650px;
    padding: 2em;
    height: 100%;
   
    @media(max-width: 700px){
        width: 100%;
        padding: 0;
    }

`;