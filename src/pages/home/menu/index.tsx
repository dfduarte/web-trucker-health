import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';

import { DesktopMenu } from './desktop';
import { MobileMenu } from './mobile';

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Menu: FC = () => {
  const [mobileViewport, setMobileViewport] = useState(
    window.innerWidth <= 800,
  );

  const handleResize = (): void => {
    setMobileViewport(window.innerWidth <= 800);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return mobileViewport ? <MobileMenu /> : <DesktopMenu />;
};
