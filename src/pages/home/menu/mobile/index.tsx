import React, { FC, useState, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { useOnClickOutside } from './burguer.hooks.js';
import { Burger } from './burger';
import { Menu } from './menu';

export const MobileMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const menuId = 'main-menu';

  useOnClickOutside(node, () => setOpen(false));
  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  );
};
