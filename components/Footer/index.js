import { useRef } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import {
  Text,
  ThinTitle,
  TextWrap,
  AnimatedComponentWrap,
  TitleWrap,
} from '../../styles/shared';
import { colors } from '../../styles/colors';
import { stacks } from '@/context/data';

export default function Footer() {
  const scrollRef = useRef(null);
  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >
      <TextWrap>
        <Text>
          Loosely designed in Figma and coded in Visual Studio. Built with
          Next.js and Styled Components, deployed with Vercel.
        </Text>
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
