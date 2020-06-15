import React, { FC } from 'react';
import styled from 'styled-components';

import { Grid, Text, Stack } from '../../../design-system';

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  background: ${({ theme }) => theme.colors.cereja};
  padding: ${({ theme }) => theme.space.x2} 0;

  ${({ theme }) => theme.media.above('md')} {
    height: 60vh;
  }
`;

const BENEFITS_DATA = [
  {
    title: 'Horas Dirigidas',
    description:
      'A empresa determina a qunaitdade de horas dirigidas e a plataforma calcula os intervalos de descanso.',
  },
  {
    title: 'Relatorios',
    description:
      'Relatórios dos funcionários e suas horas dirigidas, para conseguir acompanhar melhor como anda as horas de descanso.',
  },
  {
    title: 'SOS',
    description:
      'Caso o motorista precise de alguma ajuda urgente nosso aplicativo envia uma mensagem para as autoridades locais e para a empresa.',
  },
];

export const Benefits: FC = () => {
  return (
    <Container>
      <div>
        <Grid
          gridTemplateColumns="repeat(12, 1fr)"
          htmlAttrs={{ style: { marginBottom: '1rem' } }}
        >
          <Grid gridColumn="2 / 12">
            <Text color="dawnPink" textSize={['x3', 'x5']} isBold>
              Plataforma Trucker Health
            </Text>
          </Grid>
        </Grid>
        <Grid gridTemplateColumns="repeat(12, 1fr)">
          <Grid gridColumn="2 / 12">
            <Stack layout={['vertical', 'horizontal']} margin="x3">
              {BENEFITS_DATA.map(
                ({
                  title,
                  description,
                }: {
                  title: string;
                  description: string;
                }) => (
                  <Stack key={title} layout="vertical">
                    <Text color="dawnPink" textSize="x2" isBold>
                      {title}
                    </Text>
                    <Text color="dawnPink">{description}</Text>
                  </Stack>
                ),
              )}
            </Stack>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
