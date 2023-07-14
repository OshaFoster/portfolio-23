import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '@/styles/colors';
import { media } from '@/styles/shared';
import { ThinTitle, Decoration, TextWrap } from '@/styles/shared';
import { Context } from '@/context/Context';

const Item = styled.div`
  background-color: ${colors.highlightLight};
  border-radius: 5px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 0px;
  font-size: 14px;
  color: ${colors.highlight};
  padding: 5px 10px;
  ${media.small`
  color: ${colors.highlight};
  background-color: ${colors.highlightLight};
  `}
`;
const Wrap = styled.div`
  display: inline-block;
  /* background-color: red; */
`;

const ItemInView = styled.div`
  border-radius: 5px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 0px;
  font-size: 14px;
  color: ${colors.highlight};
  padding: 5px 10px;
  ${media.small`
  color: ${colors.highlight};
  background-color: ${colors.highlightLight};
  `}
`;

const StackWrap = styled.div`
  margin: 50px 0px;
`;

export default function Skills() {
  const { inViewStack, allStacks } = useContext(Context);
  return (
    <StackWrap>
      <ThinTitle>Skills</ThinTitle>
      <Decoration/>
      <TextWrap>
      {_.map(allStacks.fullStack, (item, i) => {
        if (_.includes(allStacks[inViewStack], item)) {
          return (
            <Wrap key={i}>
              <Item>{item}</Item>
            </Wrap>
          );
        } else {
          return (
            <Wrap key={i}>
              <ItemInView>{item}</ItemInView>
            </Wrap>
          );
        }
      })}
      </TextWrap>
    </StackWrap>
  );
}
