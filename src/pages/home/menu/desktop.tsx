import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo, Grid, Stack, Text } from '../../../design-system';
import { MENU_OPTIONS } from './options';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled(Grid)`
  padding-top: ${({ theme }) => theme.space.x2};
`;

export const DesktopMenu: FC = () => {
  return (
    <Container gridTemplateColumns="repeat(12, 1fr)">
      <Grid gridColumn="2 / 6">
        <Stack layout="horizontal">
          <Logo color="dawnPink" labelPosition="right" />
        </Stack>
      </Grid>
      <Grid gridColumn="8 / 12">
        <Nav>
          <Stack
            as="ul"
            layout="horizontal"
            alignItems="flex-end"
            margin="x4"
            htmlAttrs={{ style: { listStyleType: 'none' } }}
          >
            {MENU_OPTIONS.map(option => (
              <li>
                <Text
                  as="a"
                  color="dawnPink"
                  textSize="x2"
                  isBold
                  htmlAttrs={{
                    ...(option.href && { href: option.href }),
                  }}
                >
                  {option.label}
                </Text>
              </li>
            ))}
          </Stack>
        </Nav>
      </Grid>
    </Container>
  );
};
