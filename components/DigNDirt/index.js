import { useRef, useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { motion } from 'framer-motion';
import { Context } from '@/context/Context';

import {
  Text,
  ThinTitle,
  TextWrap,
  AnimatedComponentWrap,
  TitleWrap,
} from '@/styles/shared';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 800px;
  height: 300px;
  margin-top: 20px;
  /* background-color: pink; */
`;

const ImageWrap = styled.div`
  position: relative;
  height: 277px;
  width: 138px;
  overflow: hidden;
  border-radius: 23px;
  margin-right: 40px;
  transition: transform 0.4s ease-in-out;
  /* background-color: orange; */

  &:hover {
    z-index: 10;
    box-shadow: 0 0 15px black;
  }
`;

const AnimatedImage = motion(ImageWrap);

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const dndImages = [
  { src: '/static/images/dnd1.png', alt: 'dnd img 1' },
  { src: '/static/images/dnd2.png', alt: 'dnd img 2' },
  { src: '/static/images/dnd3.png', alt: 'dnd img 3' },
];

const eqtImages = [
  { src: '/static/images/eqt1.png', alt: 'eqt img 1' },
  { src: '/static/images/eqt2.png', alt: 'eqt img 2' },
  { src: '/static/images/eqt3.png', alt: 'eqt img 3' },
];

const hndImages = [
  { src: '/static/images/hnd1.png', alt: 'hnd img 1' },
  { src: '/static/images/hnd2.png', alt: 'hnd img 2' },
  { src: '/static/images/hnd3.png', alt: 'hnd img 3' },
];

const mapImages = (images) =>
  _.map(images, (img) => (
    <AnimatedImage
      key={img.alt}
      whileHover={({ scale: 1.8, })}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Image src={img.src} alt={img.alt} />
    </AnimatedImage>
  ));

export default function DigNDirt() {
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
      // console.log('truthy');
    } else {
      setElementVisible(false);
      // console.log('falsy');
    }
    if (isElementVisible) {
      setInViewStack('dnd');
    }
  }, [inView, isElementVisible, ref, setInViewStack, inViewStack]);

  return (
    <>
      <AnimatedComponentWrap
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ root: scrollRef, once: false }}
      >
        <TitleWrap >
          <ThinTitle>DigNDirt</ThinTitle>
        </TitleWrap>
        <ImageContainer>{mapImages(dndImages)}</ImageContainer>

        <TextWrap>
          <Text ref={ref}>
            LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
            create label sets for medical supplies. • Developed the frontend
            interface and connected it to a Django backend, ensuring seamless
          </Text>
          <StackComp stack={'dnd'} />
        </TextWrap>
      </AnimatedComponentWrap>
      <AnimatedComponentWrap
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ root: scrollRef, once: false }}
      >
        <TitleWrap>
          <ThinTitle>Equipment Tracker</ThinTitle>
        </TitleWrap>
        <ImageContainer>{mapImages(eqtImages)}</ImageContainer>
        <TextWrap>
          <Text>
            LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
            create label sets for medical supplies. • Developed the frontend
            interface and connected it to a Django backend, ensuring seamless
          </Text>
          <StackComp stack={'dnd'} />
        </TextWrap>
      </AnimatedComponentWrap>
      <AnimatedComponentWrap
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ root: scrollRef, once: false }}
      >
        <TitleWrap>
          <ThinTitle>HaulNDirt</ThinTitle>
        </TitleWrap>
        <ImageContainer>{mapImages(hndImages)}</ImageContainer>

        <TextWrap>
          <Text>
            LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
            create label sets for medical supplies. • Developed the frontend
            interface and connected it to a Django backend, ensuring seamless
          </Text>
          <StackComp stack={'dnd'} />
        </TextWrap>
      </AnimatedComponentWrap>
    </>
  );
}
