import React, { FC } from 'react';
import styled from 'styled-components';

import { Grid, Text, Stack } from '../../../design-system';
import screenSleepAppSrc from '../../../assets/screen-sleep-app.png';
import screenFitAppSrc from '../../../assets/screen-fit-app.png';

const Container = styled.section`
  min-height: 90vh;
  padding: ${({ theme }) => theme.space.x2} 0;
  background: ${({ theme }) => theme.colors.dawnPink};

  ${({ theme }) => theme.media.above('md')} {
    height: 90vh;
  }
`;

const SleepImage = styled(Grid)`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.space.x2};

  img {
    max-height: 70vh;
  }
`;

const FitImage = styled(Grid)`
  display: flex;
  justify-content: center;
  align-self: flex-end;

  img {
    max-height: 70vh;
  }
`;

export const KnowMore: FC = () => {
  return (
    <Container>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        htmlAttrs={{ style: { height: '100%' } }}
      >
        <Grid gridColumn={['2 / 12', '2 / 12', '2 / 7']}>
          <Stack margin="x5" htmlAttrs={{ style: { alignSelf: 'center' } }}>
            <Text as="span" textSize={['x4', 'x5']} color="lightDark">
              {`Aplicativo `}
              <strong>Trucker Health</strong>
            </Text>
            <Text color="lightDark">
              Cálculo automático dos intervalos para descanso.
            </Text>
            <Text color="lightDark">
              Nosso aplicativo calcula e mostra a hora exata de descanso para o motorista.
            </Text>
            <Text color="lightDark">
              Como a atencao e essencial para o motorista nosso aplicativo emite um alerta sonoro para cada alarme: Descanso; Aproximando de um posto; batimentos cardiacos alterados.
            </Text>
          </Stack>
        </Grid>

        <SleepImage gridColumn={['2 / 12', '2 / 12', '7 / 9']}>
          <img src={screenSleepAppSrc} alt="" />
        </SleepImage>

        <FitImage gridColumn={['2 / 12', '2 / 12', '10 / 12']}>
          <img src={screenFitAppSrc} alt="" />
        </FitImage>
      </Grid>
    </Container>
  );
};
