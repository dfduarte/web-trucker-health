import React, { FC } from 'react';
import { Hero } from './hero';
import { Vision } from './vision';
import { Benefits } from './benefits';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Benefits />
    </>
  );
};
