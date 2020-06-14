import React, { FC } from 'react';
import styled from 'styled-components';
import { shade } from 'polished';
import { ColorProps } from '../../theme';
import { HtmlAttrs } from '../../baseProps';

export type ButtonProps = {
  color?: ColorProps;
  isOutlined?: boolean;
  type?: 'button' | 'reset' | 'submit';
  htmlAttrs?: HtmlAttrs;
  ariaLabel?: string;
  role?: string;
  onClick?: () => void;
};

const Component = styled.button<{ isOutlined?: boolean; color?: ColorProps }>`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  padding: 0 ${({ theme }) => theme.space.x2};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  transition: background-color 0.2s;

  background: ${({ theme, isOutlined, color }) =>
    isOutlined ? theme.colors.dawnPink : theme.colors[color!]};
  color: ${({ theme, isOutlined }) =>
    isOutlined ? theme.colors.cereja : theme.colors.dawnPink};
  border: ${({ theme, isOutlined }) =>
    isOutlined ? `1px solid ${theme.colors.cereja}` : 0};

  &:hover {
    background: ${({ theme, isOutlined, color }) =>
      isOutlined ? theme.colors.cereja : shade(0.2, theme.colors[color!])};
    color: ${({ theme, isOutlined }) => isOutlined && theme.colors.dawnPink};
  }
`;

export const Button: FC<ButtonProps> = ({
  isOutlined,
  children,
  color,
  ...rest
}) => (
  <Component type="button" isOutlined={isOutlined} color={color} {...rest}>
    {children}
  </Component>
);

Button.defaultProps = {
  color: 'cereja',
};
