import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { ThinTitle, Decoration, Span } from '../../styles/shared';
import { BsChevronDown } from 'react-icons/bs';
import { Context } from '../../context/Context';
import { motion } from 'framer-motion';

const StickyWrap = styled.div`
  position: sticky;
  top: 0;
  height: 80px;
  background-color: black;
  z-index: 10;
  width: 100%;
  padding-left: 150px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  /* background-color: orange; */
`;

const FlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: yellow; */
`;

const AnimatedTitle = motion(ThinTitle);

export default function RightHeader() {
  const { inViewStack } = useContext(Context);
  const [company, setCompany] = useState('');

  useEffect(() => {
    if (inViewStack === 'hilaryWatts' || inViewStack === 'meritMedical') {
      setCompany('Freelance');
    } else if (inViewStack === 'stepite') {
      setCompany('Stepite');
    } else {
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
              <Span> &nbsp;— {company}</Span>
            </AnimatedTitle>
          </TitleWrap>
          {/* <BsChevronDown style={{ color:  colors.highlight, fontSize: '24px', marginLeft: '240px' }} /> */}
        </FlexWrap>
        <Decoration />
      </StickyWrap>
    </>
  );
}
