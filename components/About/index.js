import _ from 'lodash';
import { ThinTitle, Decoration, Text, Span, TextWrap } from '@/styles/shared';

export default function About() {
  return (
    <>
      <ThinTitle>About</ThinTitle>
      <Decoration />
      <TextWrap>
        <Text>
          Hi, I am a <Span>&nbsp;software engineer</Span>. I enjoy collaborating
          with a team, and I work well solo. I am a
          <Span>&nbsp;good thinker</Span>, ask thoughtful questions, and quickly
          identify the root of a problem.
          <Span>&nbsp;I love learning new skills&nbsp;</Span>and excel at
          enhancing the user experience. I have contributed to the development
          of seven apps, utilizing four different technology stacks, and
          overseeing the entire process from initial concept to deployment.
          <Span>&nbsp;I am excited to work with you.&nbsp;</Span>
        </Text>
      </TextWrap>
    </>
  );
}

{
  /* <Span>&nbsp;analytical skills&nbsp;</Span> */
}
