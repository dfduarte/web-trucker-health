import React, { FC } from 'react';
import { Hero } from './hero';
import { Vision } from './vision';
import { Benefits } from './benefits';
import { KnowMore } from './know-more';
import { HowWork } from './how-work';

export const Home: FC = () => {
  return (
    <>
      <Hero />
      <Vision />
      <Benefits />
      <KnowMore />
      <HowWork />
    </>
  );
};
