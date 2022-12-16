import styled, { css } from 'styled-components';

interface CanvaProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  chidren?: React.ReactNode;
}

interface CircleProps {
  x: number;
  y: number;
}

export const Canva = styled.div<CanvaProps>`
  width: 100%;
  height: 100vh;
  background-color: #000;
  cursor: pointer;
`;

export const Button = styled.div<ButtonProps>`
  width: 180px;
  height: 45px;
  border: none;
  border: 1px solid white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  &:focus{
    outline: none;
  }
  margin-right: 20px;
  cursor: pointer;
  box-shadow: 0 0 10px #ffffff84;
  transition: all 0.3s ease;
  &:hover{
    background-color: #fff;
    color: #000;
  }
  ${(props) => {
    if(props.disabled){
      return css`
        background-color: #838383; 
        color: #000;
        cursor: not-allowed;
        &:hover{
          background-color: #838383;
          color: #000;
        }
      `;
    }
  }};
  user-select: none;
`;

export const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: ${(props: CircleProps) => props.y}px;
  left: ${(props: CircleProps) => props.x}px;
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  position: absolute;
  background-color: black;
`;