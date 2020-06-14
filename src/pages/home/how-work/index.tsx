import React, { FC } from 'react';
import styled from 'styled-components';

import { Text, Button, Grid } from '../../../design-system';

const Container = styled.section`
  background: ${({ theme }) => theme.colors.cereja};
  padding: ${({ theme }) => theme.space.x3} 0;
`;

export const HowWork: FC = () => {
  return (
    <Container>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        htmlAttrs={{ style: { height: '100%' } }}
      >
        <Grid gridColumn="2 / 12">
          <Text as="span" textSize="x3" color="dawnPink">
            Veja agora como funciona:
          </Text>
        </Grid>
        <Grid gridColumn={['2 / 12', '6 / 9']}>
          <Button isOutlined>Veja Demonstração</Button>
        </Grid>
      </Grid>
    </Container>
  );
};
