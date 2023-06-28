import _ from 'lodash';
import { ThinTitle, Decoration, Text, Span } from '../../styles/shared';

export default function About() {
  return (
    <>
      <ThinTitle>About</ThinTitle>
      <Decoration />

      <Text>
        As a<Span>&nbsp;skilled software engineer,&nbsp;</Span>I have a proven
        track record of spotting problems early and manage teams to deliver
        quality software. I am a<Span>&nbsp;natural problem solver&nbsp;</Span>
        who enjoys collaborating with clients, team members, and subcontractors
        to create better products. For example, I
      </Text>
    </>
  );
}
