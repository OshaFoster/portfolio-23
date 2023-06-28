import { useRef, useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { Context } from '@/context/Context';

import {
  Text,
  ThinTitle,
  TextWrap,
  AnimatedComponentWrap,
  TitleWrap,
  Span,
} from '@/styles/shared';
import { colors } from '@/styles/colors';

const LinkWrap = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
`;
const LinkTo = styled.a`
  color: ${colors.highlight};
  font-size: 18px;
`;

export default function Stepite() {
  const scrollRef = useRef(null);
  const { inViewStack, setInViewStack } = useContext(Context);
  const [isElementVisible, setElementVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Optionally trigger the callback only once
    threshold: 1, // Percentage of element visibility required to trigger the callback
  });

  useEffect(() => {
    if (inView) {
      setElementVisible(true);
    } else {
      setElementVisible(false);
    }
    if (isElementVisible) {
      setInViewStack('stepite');
    }
  }, [inView, isElementVisible, ref, setInViewStack, inViewStack]);

  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >

      <TitleWrap ref={ref}>
        <ThinTitle>Stepite</ThinTitle>
      </TitleWrap>
      <LinkWrap>
        <LinkTo href='https://www.stepite.com/'>Stepite.com</LinkTo>
      </LinkWrap>
      <TextWrap>
        <Text>
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets for medical supplies. • Developed the frontend
          interface and connected it to a Django backend, ensuring seamless LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets <Span>&nbsp;natural problem solver&nbsp;</Span>
          for medical supplies. • Developed the frontend interface and connected
          it to a Django backend, ensuring seamless
        </Text>
        <StackComp stack={'stepite'} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
