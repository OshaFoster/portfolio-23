import { useState, useEffect, useContext } from 'react';

import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '../../styles/colors';
import { ThinTitle, Decoration } from '../../styles/shared';
import { StackContext } from '../../context/StackContext';

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
`;
const Wrap = styled.div`
  display: inline-block;
  /* background-color: red; */
`;

const ItemInView = styled.div`
  /* background-color: ${colors.highlightLight}; */
  border-radius: 5px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 0px;
  font-size: 14px;
  color: ${colors.highlight};
  padding: 5px 10px;
`;

const StackWrap = styled.div`
  margin: 20px 0px;
`;

export default function FullStack() {
  const { inViewStack, allStacks } = useContext(StackContext);
  return (
    <StackWrap>
      <ThinTitle>Skills (so far)</ThinTitle>
      <Decoration/>
      {_.map(allStacks.fullStack, (item, i) => {
        if (_.includes(inViewStack, item)) {
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
    </StackWrap>
  );
}
