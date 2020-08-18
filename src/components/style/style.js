import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    height: 100%;
`

export const ImageSection = styled.section`
    width: 60%;
    height: 100vh;
    
    background-image: url(/img/${props=>props.img}.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position:sticky;
    top:0;

    &:after {
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        background-color: ${({theme:{colors}})=>colors.lightBlue};
        opacity: 15%;
      }

      @media(max-width:1200px){
            display: none;
      }
`;

export const InputSection = styled.section`

      min-width: 600px;
      height:100%;
      box-sizing:border-box;
      padding: 50px 100px;
      

      h1{
            color: ${({theme:{colors}})=>colors.gray};
            font-size: 50px;
      }



      @media(max-width: 1200px){
            
            margin: 10% auto;

            h1{
                  text-align: center;
            }
      }

      @media(max-width: 600px){

            margin: ${props=>props.signUp? "0 auto" : "10% auto"};

            padding: 10px 50px;
            min-width: 100%;
            
      }

      @media(max-width: 350px){

            h1{
                  font-size: 1.5em;
            }
      }
  
`;

export const InputText = styled.input`
      width: 100%;
      outline: 0;
      border: 0;
      border-bottom: 1px solid ${({theme:{colors}})=>colors.gray};
      padding: 15px;
      margin: 0 0 15px;
`;



export const InputContainer = styled.div`
      margin:40px 0;
      
      

      label{
            font-weight: bold;
            font-size: 1.5em;
            color: ${({theme:{colors}})=>colors.gray}
      }

      @media(max-width: 600px){

            label{
                  font-size: 1em;
            }
            
            margin: 15px 0;
            
      }

     
`;

export const ErrorMessage = styled.p`
      display: block;
      color:red;
      
      @media(max-width: 350px){

            font-size:0.7em;
      }
      
`;

export const ButtonsContainer = styled.div`
      width: 100%;
      display:flex;
      justify-content: space-around;
      align-items:center;
      button{
            padding: 15px 50px;
            border-radius: 15px;
            background-color: ${({theme:{colors}})=>colors.lightBlue};
            border: 0.5px solid ${({theme:{colors}})=>colors.gray};
            color: white;
            transition: 0.2s;
            cursor: pointer;
            &:hover{
                  background-color: ${({theme:{colors}})=>colors.blue};
            } 
      }

      a{
            color: black;
            text-decoration: none;
            padding: 10px 20px;

            transition: 0.2s;
            
            &:hover{
                  color: ${({theme:{colors}})=>colors.gray};
            } 

      }


      @media(max-width: 600px){

            font-size: 0.75em;

            button{
                  padding: 15px 35px;
                  border-radius: 15px;
                  
            }
      
            a{
                  color: black;
                  text-decoration: none;
                  padding: 10px 20px;
      
                  transition: 0.2s;
                  
                  &:hover{
                        color: ${({theme:{colors}})=>colors.gray};
                  } 
      
            }
            
            
      }
`;




