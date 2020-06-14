import React, { FC } from 'react';
import styled from 'styled-components';

import { Grid, Text, Stack } from '../../../design-system';
import screenSleepAppSrc from '../../../assets/screen-sleep-app.png';
import screenFitAppSrc from '../../../assets/screen-fit-app.png';

const Container = styled.section`
  height: 90vh;
  padding: ${({ theme }) => theme.space.x2} 0;
  background: ${({ theme }) => theme.colors.dawnPink};
`;

const SleepImage = styled(Grid)`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  margin: ${({ theme }) => theme.space.x2} 0;

  img {
    max-height: 80vh;
  }
`;

const FitImage = styled(Grid)`
  display: flex;
  justify-content: center;
  align-self: flex-end;

  img {
    max-height: 80vh;
  }
`;

export const KnowMore: FC = () => {
  return (
    <Container>
      <Grid
        gridTemplateColumns="repeat(12, 1fr)"
        htmlAttrs={{ style: { height: '100%' } }}
      >
        <Grid gridColumn={['2 / 12', '2 / 7']}>
          <Stack margin="x5" htmlAttrs={{ style: { alignSelf: 'center' } }}>
            <Text as="span" textSize={['x4', 'x5']} color="lightDark">
              {`Aplicativo `}
              <strong>Trucker Health</strong>
            </Text>
            <Text color="lightDark">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            <Text color="lightDark">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
            <Text color="lightDark">
              Lorem Ipsum has been the industrys standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </Text>
          </Stack>
        </Grid>

        <SleepImage gridColumn={['2 / 12', '7 / 9']}>
          <img src={screenSleepAppSrc} alt="" />
        </SleepImage>

        <FitImage gridColumn={['2 / 12', '10 / 12']}>
          <img src={screenFitAppSrc} alt="" />
        </FitImage>
      </Grid>
    </Container>
  );
};
