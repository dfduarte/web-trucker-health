import React, { FC } from 'react';
import styled from 'styled-components';

import { Grid, Text, Box } from '../../../design-system';

const Container = styled.section`
  height: 80vh;
  background: ${({ theme }) => theme.colors.lightDark};
`;

export const Vision: FC = () => {
  return (
    <Container>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        htmlAttrs={{ style: { height: '100%' } }}
      >
        <Grid gridColumn={['2 / 12', '2 / 7']}>
          <Box display="flex" alignItems="center">
            <Text textSize={['x4', 'x5']} color="dawnPink">
              Cuide da saúde dos heróis que andam pelas rodovias desse país
            </Text>
          </Box>
        </Grid>
        <Grid gridColumn={['2 / 12', '8 / 12']} display={['none', 'grid']}>
          <Box display="flex" alignItems="center">
            <Text textSize="x3" color="dawnPink">
              Com o Trucker Health, você incentiva a realização de atividades
              físicas, alimentação saudável e melhoras na qualidade do sono,
              tudo isso de forma lúdica e divertida.
            </Text>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
