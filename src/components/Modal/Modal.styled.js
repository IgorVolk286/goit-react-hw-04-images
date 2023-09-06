import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(48, 24, 21, 0.78);
  border: 5px solid black;
`;
export const Img = styled.img`
  width: 800px;
  height: 600px;
`;

export const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid white;
`;
