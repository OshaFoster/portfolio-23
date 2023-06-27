import { useRef } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { Text, ThinTitle, TextWrap } from '../../styles/shared';
import { colors } from '../../styles/colors';
import { motion } from 'framer-motion';
import { stacks } from '@/context/data';

const ComponentWrap = styled.div`
  margin-top: 60px;
`;

const AnimatedComponentWrap = motion(ComponentWrap);

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;
  height: 400px;
  margin-top: 20px;
  /* background-color: pink; */
`;

const ImageWrap = styled.div`
  position: relative;
  width: 277px;
  height: 158px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 10px;
  &:hover {
    z-index: 2;
    box-shadow: 0 0 15px black;
  }
`;

const AnimatedImage = motion(ImageWrap);

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const images = [
  { src: '/static/images/mm1.png', alt: 'mm img 1' },
  { src: '/static/images/mm2.png', alt: 'mm img 2' },
  { src: '/static/images/mm3.png', alt: 'mm img 3' },
  { src: '/static/images/mm4.png', alt: 'mm img 4' },
];

const mapImages = () =>
  _.map(images, (img) => (
    <AnimatedImage
      key={img.alt}
      whileHover={{ scale: 2 }}
    >
      <Image src={img.src} alt={img.alt} />
    </AnimatedImage>
  ));

export default function MeritMedical() {
  const scrollRef = useRef(null)
  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >
      <TitleWrap>
        <ThinTitle>Merit Medical</ThinTitle>
      </TitleWrap>
      <ImageContainer>{mapImages()}</ImageContainer>
      <TextWrap>
        <Text>
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets{' '}
          <span
            style={{
              color: colors.decorationLight,
              opacity: 1,
            }}
          >
            &nbsp;natural problem solver&nbsp;
          </span>
          for medical supplies. • Developed the frontend interface and connected
          it to a Django backend, ensuring seamless
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets{' '}
          <span
            style={{
              color: colors.decorationLight,
              opacity: 1,
            }}
          >
            &nbsp;natural problem solver&nbsp;
          </span>
          for medical supplies. • Developed the frontend interface and connected
        </Text>
        <StackComp stack={stacks.meritMedical} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
