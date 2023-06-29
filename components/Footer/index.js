import { useRef } from 'react';
import _ from 'lodash';
import {
  Text,
  Decoration,
  TextWrap,
  AnimatedComponentWrap,
  Span,
} from '../../styles/shared';

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
        <Decoration/>
        <Text>
          This <Span> portfolio </Span> was designed in <Span>Figma</Span> coded in
          <Span> Visual Studio Code</Span> built with <Span> NextJS </Span> and
          deployed with
          <Span> Vercel </Span>, by me.
        </Text>
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
