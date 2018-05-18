import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../constants';

import Link from './Link';

export default ({ children, ...delegated }) => (
  <Wrapper {...delegated}>
    <MainText>{children}</MainText>
    <HoverText>{children}</HoverText>
  </Wrapper>
);

const Wrapper = styled(Link)`
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${COLORS.blue[500]};
  font-weight: 600;

  &:after {
    content: '';
    position: absolute;
    left: -2px;
    right: -2px;
    bottom: 0;
    height: 2px;
    background-color: ${COLORS.blue[500]};
    border-radius: 2px;
    transition: transform 250ms 200ms, opacity 450ms 200ms;
  }

  &:hover:after {
    transform: translateY(-6px);
    opacity: 0;
    transition: transform 250ms, opacity 450ms;
  }
`;

const MainText = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  color: ${COLORS.black};
`;

const HoverText = styled.span`
  display: inline-block
  position: absolute;
  z-index: 2;
  left: 0;
  user-select: none;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);

  transition: clip-path 700ms;

  ${Wrapper}:hover & {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;
