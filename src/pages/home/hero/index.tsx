import React, { FC } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import backgroundImage from '../../../assets/background-home.png';
import { Menu } from '../menu';
import { Grid, Text, Box, Button, Stack } from '../../../design-system';
import screenHomeAppSrc from '../../../assets/screen-home-app.png';

const Container = styled.section`
  height: 100vh;
  position: relative;
`;

const Background = styled.div`
  background: url(${backgroundImage}) no-repeat center;
  background-size: cover;
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: -10;
  flex: 1;
  opacity: 0.7;
`;

const ImageHero = styled.img`
  max-height: 80vh;
  margin-top: ${({ theme }) => theme.space.x2};
`;

const ContainerButton = styled.div`
  ${({ theme }) => theme.media.above('md')} {
    width: 300px;
  }
`;

export const Hero: FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Background />
      <Menu />
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        htmlAttrs={{ style: { height: '80%' } }}
      >
        <Grid gridColumn={['2 / 12', '2 / 7']}>
          <Box display="flex" alignItems="center">
            <Stack layout="vertical">
              <Text as="h1" color="dawnPink" textSize={['x3', 'x6']} isBold>
                Uma plataforma para cuidar da saúde dos caminhoneiros
              </Text>
              <ContainerButton>
                <Button onClick={() => history.push('/')} isOutlined>
                  Ver Demonstração
                </Button>
              </ContainerButton>
            </Stack>
          </Box>
        </Grid>

        <Grid gridColumn="8 / 11" display={['none', 'grid']}>
          <ImageHero src={screenHomeAppSrc} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};
