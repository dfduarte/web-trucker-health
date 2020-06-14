import React, { FC } from 'react';
import styled from 'styled-components';

import backgroundImage from '../../assets/background-home.png';
import { Menu } from './menu/index';

export const Container = styled.section`
  height: 100vh;
  position: relative;
`;

export const Background = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -10;
  flex: 1;
`;

export const Home: FC = () => {
  return (
    <Container>
      <Background />
      <Menu />
    </Container>
  );
};
