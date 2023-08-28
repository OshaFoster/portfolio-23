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
      <TitleWrap>
        <ThinTitle>Stepite&nbsp;–&nbsp;</ThinTitle>
        <LinkTo target='_blank' href='https://www.stepite.com/'>
          stepite.com
        </LinkTo>
      </TitleWrap>
      <TextWrap>
        <Text ref={ref}>
          Collaborated on a Django app processing ASIN data to
          <Span>&nbsp;generate reports&nbsp;</Span>on Amazon trends. Utilized
          Matplotlib to create<Span>&nbsp;visually appealing graphs&nbsp;</Span>{' '}
          for easy data comprehension. Built a user-friendly website with Django
          CMS to display reports. Engaged in client discussions to understand
          needs and ensure application and reports met expectations. Showcased
          <Span>&nbsp;attention to detail&nbsp;</Span> and
          <Span>&nbsp;analytical skills&nbsp;</Span> in processing and analyzing
          large data sets. Led daily stand-ups, prioritized tasks, and helped to
          facilitate sprint planning and retrospectives.
        </Text>
        <StackComp stack={'stepite'} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
