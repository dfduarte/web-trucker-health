import React, { FC } from 'react';
import styled from 'styled-components';
import { Logo } from '../../../../../design-system';

const LogoContainer = styled.div`
  position: absolute;
  top: 5%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;

const StyledBurger = styled.button<{ open: boolean }>`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.colors.cereja : theme.colors.dawnPink};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

export const Burger: FC<{ open: boolean; setOpen: Function }> = ({
  open,
  setOpen,
  ...props
}) => {
  const isExpanded = !!open;

  return (
    <>
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => setOpen(!open)}
        {...props}
      >
        <span />
        <span />
        <span />
      </StyledBurger>
      <LogoContainer>
        <Logo color="dawnPink" labelPosition="right" />
      </LogoContainer>
    </>
  );
};

Burger.defaultProps = {
  open: false,
};
