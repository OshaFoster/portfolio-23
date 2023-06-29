import { useRef, useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import {
  Text,
  ThinTitle,
  TextWrap,
  AnimatedComponentWrap,
  TitleWrap,
  Span,
} from '../../styles/shared';
import { motion } from 'framer-motion';
import { Context } from '../../context/Context';

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

const mapImages = () => {
  const transformedImages = _.map(images, (img, i) => {
    let x = 60
    if (i%2) {
      x = -80
    }
    return (
      <AnimatedImage
        key={img.alt}
        whileHover={{ scale: 1.8, x: x }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <Image src={img.src} alt={img.alt} />
      </AnimatedImage>
    );
  });
  return transformedImages;
};

export default function HilaryWatts() {
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
      setInViewStack('hilaryWatts');
    }
  }, [inView, isElementVisible, ref, setInViewStack, inViewStack]);

  return (
    <AnimatedComponentWrap
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ root: scrollRef, once: false }}
    >
      <TitleWrap >
        <ThinTitle>Hilary Watts </ThinTitle>
      </TitleWrap>
      <ImageContainer >{mapImages()}</ImageContainer>
      <TextWrap >
        <Text ref={ref}>
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets <Span>&nbsp;natural problem solver&nbsp;</Span>
          for medical supplies. • Developed the frontend interface and connected
          it to a Django backend, ensuring seamless
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets <Span>&nbsp;natural problem solver&nbsp;</Span>
          for medical supplies. • Developed the frontend interface and connected
          it to a Django backend, ensuring seamless
        </Text>
        <StackComp stack={'hilaryWatts'} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
