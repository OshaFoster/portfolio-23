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
import { colors } from '@/styles/colors';
import { stacks } from '@/context/data';
import { motion } from 'framer-motion';

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
  /* background-color: orange; */
`;

const AnimatedImage = motion(ImageWrap);

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const images = [
  { src: '/static/images/h1.png', alt: 'mm img 1' },
  { src: '/static/images/h2.png', alt: 'mm img 2' },
  { src: '/static/images/h3.png', alt: 'mm img 3' },
  { src: '/static/images/h4.png', alt: 'mm img 4' },
];

const mapImages = () =>
  _.map(images, (img) => (
    <AnimatedImage
      key={img.alt}
      whileHover={{ scale: 2 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Image src={img.src} alt={img.alt} />
    </AnimatedImage>
  ));

export default function HilaryWatts() {
  const scrollRef = useRef(null);
  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >
      <TitleWrap>
        <ThinTitle>Hilary Watts </ThinTitle>
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
        </Text>
        <StackComp stack={stacks.hilaryWatts} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
