import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { ThinTitle, Decoration, Title } from '../../styles/shared';

const HeaderWrap = styled.div`
  margin: auto;
  box-sizing: border-box;
  height: 100px;
`;

export default function Header() {
  return (
    <>
      <HeaderWrap>
        <Title>Osha Foster</Title>
        <ThinTitle>Software Engineer</ThinTitle>
        <Decoration />
      </HeaderWrap>
    </>
  );
}
