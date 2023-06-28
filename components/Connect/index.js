import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '../../styles/colors';
import { ThinTitle, Decoration } from '../../styles/shared';
import { CiLinkedin } from 'react-icons/ci';

const ConnectA = styled.a`
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
  margin-left: 20px;
  border: 0.8px solid ${colors.highlight};
  &:hover {
    box-shadow: 1px 1px 1px ${colors.highlight};
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

    return <ConnectA href={mailtoLink}>Email</ConnectA>;
  };

  return (
    <>
      <ThinTitle>Connect</ThinTitle>
      <Decoration />
      <WrappedLinks>
        <CiLinkedin
          style={{
            color: colors.highlight,
            fontSize: '28px',
          }}
        />
        <EmailLink />
      </WrappedLinks>
    </>
  );
}
