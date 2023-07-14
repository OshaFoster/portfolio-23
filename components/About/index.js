import _ from 'lodash';
import { ThinTitle, Decoration, Text, Span, TextWrap } from '@/styles/shared';

export default function About() {
  return (
    <>
      <ThinTitle>About</ThinTitle>
      <Decoration />
      <TextWrap>
        <Text>
          Hi, I am a software engineer. I enjoy collaberating with a team and I
          also work well on my own. Yada, Yada, Yada...Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco.
        </Text>
      </TextWrap>
    </>
  );
}
