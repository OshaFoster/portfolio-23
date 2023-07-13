import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '@/styles/colors';
import { ThinTitle, Decoration } from '@/styles/shared';
import { CiLinkedin } from 'react-icons/ci';
import { LiaGithubSquare } from 'react-icons/lia';

const Email = styled.a`
  border-radius: 3px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 0px;
  font-size: 16px;
  color: ${colors.highlight};
  font-weight: 700;
  padding: 2px 8px;
  text-decoration: none;
  margin-left: 10px;
  border: 0.8px solid ${colors.highlight};
  &:hover {
    box-shadow: 2px 2px 1px ${colors.highlight};
    transform: translate(-2px, -2px);
  }
`;

const Icon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 5px;
  &:hover {
    box-shadow: 2px 2px 1px ${colors.highlight};
    transform: translate(-2px, -2px);
  }
`;

const WrappedLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export default function Connect() {
  const EmailLink = () => {
    const recipientEmail = 'oshafoster@hotmail.com';

    const mailtoLink = `mailto:${recipientEmail}`;

    return <Email href={mailtoLink}>Email</Email>;
  };

  const iconStyles = { color: colors.highlight, fontSize: '28px' };

  return (
    <>
      <ThinTitle>Connect</ThinTitle>
      <Decoration />
      <WrappedLinks>
        <Icon
          href='https://www.linkedin.com/in/osha-foster-a295ab52/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <CiLinkedin size={28} color={colors.highlight} style={{}} />
        </Icon>
        <Icon
          href='https://github.com/OshaFoster'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LiaGithubSquare size={28} color={colors.highlight} />
        </Icon>
        <EmailLink />
      </WrappedLinks>
    </>
  );
}
