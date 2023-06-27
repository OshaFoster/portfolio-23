import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '../../styles/colors';
import { ThinTitle, Decoration, Title } from '../../styles/shared';
import { FaLinkedin } from 'react-icons/fa';

const HeaderWrap = styled.div`
  margin: auto;
  box-sizing: border-box;
  height: 200px;
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
