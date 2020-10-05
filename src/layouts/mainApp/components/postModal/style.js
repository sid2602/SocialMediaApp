import styled, { keyframes } from "styled-components";

const opacity = keyframes`
    from{
       opacity: 0;
    }

    to{
        opacity: 1;
    }
`;

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: 0.2s;
  z-index: 1300;
  animation: ${opacity} 0.2s;
`;

export const Modal = styled.section`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 700px;
  height: 350px;
  background-color: white;
  z-index: 1300;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  animation: ${opacity} 0.2s;

  @media (max-width: 750px) {
    width: 90%;
  }
`;

export const PostContent = styled.section`
    flex: 2;
    height: 100%;
    border-right: 1px solid #e9e9e9;
    display: flex;
    align-items: center;
    justify-content: center;
    padding 1em;
`;

export const UserSection = styled.section`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const DeleteButton = styled.button`
  display: block;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: ${({ theme: { colors } }) => colors.gray};
  transition: 0.2s;

  i {
    transform-origin: 50% 50% 50%;
    transform: rotate(45deg);
    color: brown;
    transition: 0.2s;
  }

  :hover {
    color: black;
  }

  :hover i {
    color: crimson;
  }
`;
