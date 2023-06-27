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
  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >
      <TitleWrap>
        <ThinTitle>Stepite</ThinTitle>
      </TitleWrap>
      <LinkWrap>
        <LinkTo href='https://www.stepite.com/'>Stepite.com</LinkTo>
      </LinkWrap>
      <TextWrap>
        <Text>
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets for medical supplies. • Developed the frontend
          interface and connected it to a Django backend, ensuring seamless
        </Text>
        <StackComp stack={stacks.stepite} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
