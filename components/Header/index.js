import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { ThinTitle, Decoration, Title } from '@/styles/shared';
import { colors } from '@/styles/colors'

const HeaderWrap = styled.div`
  box-sizing: border-box;
  height: 200px;
`;

const Name = styled.h1`
  font-size: 62px;
  color: ${colors.text};
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export default function Header() {
  return (
    <>
      <HeaderWrap>
        <Name>Osha Foster</Name>
        <ThinTitle>Software Engineer</ThinTitle>
        <Decoration />
      </HeaderWrap>
    </>
  );
}
