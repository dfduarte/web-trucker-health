import React, { FC } from 'react';
import styled from 'styled-components';
import { shade } from 'polished';
import { MENU_OPTIONS } from '../../options';

export const StyledMenu = styled.nav<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dawnPink};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  min-width: 60%;

  ${({ theme }) => theme.media.below('md')} {
    max-width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.colors.cereja};
    text-decoration: none;
    transition: color 0.3s linear;

    ${({ theme }) => theme.media.below('md')} {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => shade(0.2, theme.colors.cereja)};
    }
  }
`;

export const Menu: FC<{ open: boolean; setOpen: Function; id: string }> = ({
  open,
  setOpen,
  id,
  ...props
}) => {
  const isHidden = !!open;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <>
      <StyledMenu open={open} aria-hidden={!isHidden} id={id} {...props}>
        {MENU_OPTIONS.map(option => (
          <a
            href={option.href}
            tabIndex={tabIndex}
            onClick={() => setOpen(!open)}
          >
            {option.label}
          </a>
        ))}
      </StyledMenu>
    </>
  );
};
