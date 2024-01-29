import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { ThinTitle, Decoration, Span } from '@/styles/shared';
import { BsCaretDownFill } from 'react-icons/bs';
import { Context } from '@/context/Context';
import { motion } from 'framer-motion';
import { colors } from '@/styles/colors';
import { media } from '@/styles/shared';

const StickyWrap = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  background-color: black;
  z-index: 2;
  width: 100%;
  padding-left: 9.4em;
  padding-top: 102px;
 ${media.medium `
  padding-left: 0px;
 `}

`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AnimatedTitle = motion(ThinTitle);

export default function RightHeader() {
  const { inViewStack } = useContext(Context);
  const [company, setCompany] = useState('chevron');

  useEffect(() => {
    if (inViewStack === 'hilaryWatts' || inViewStack === 'meritMedical') {
      setCompany('Freelance');
    } else if (inViewStack === 'stepite') {
      setCompany('Stepite');
    } else if (inViewStack === 'dnd') {
      setCompany('Verisage');
    }
  }, [inViewStack]);

  return (
    <>
      <StickyWrap>
        <FlexWrap>
          <TitleWrap>
            <ThinTitle>Recent Work </ThinTitle>
            <AnimatedTitle
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {company !== 'chevron' && <Span> &nbsp;— {company}</Span>}
            </AnimatedTitle>
          </TitleWrap>
          {company === 'chevron' && (
            <BsCaretDownFill
              style={{
                color: colors.highlight,
                fontSize: '22px',
                marginLeft: '20px',
              }}
            />
          )}
        </FlexWrap>
        <Decoration />
      </StickyWrap>
    </>
  );
}
