import _ from 'lodash';
import { colors } from '../../styles/colors';
import { ThinTitle, Decoration, Text } from '../../styles/shared';

export default function About() {


  return (
    <>
      <ThinTitle>About</ThinTitle>
      <Decoration />

      <Text>
        As a
        <span
          style={{
            color: colors.decorationLight,
            opacity: 1,
          }}
        >
          &nbsp;skilled software engineer,&nbsp;
        </span>
        I have a proven track record of spotting problems early and manage teams
        to deliver quality software. I am a
        <span
          style={{
            color: colors.decorationLight,
            opacity: 1,
          }}
        >
          &nbsp;natural problem solver&nbsp;
        </span>
        who enjoys collaborating with clients, team members, and subcontractors
        to create better products. For example, I
      </Text>
    </>
  );
}
