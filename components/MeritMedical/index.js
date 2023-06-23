import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { Text, ThinTitle, TextWrap } from '../../styles/shared';
import { colors } from '../../styles/colors';
import { motion, useAnimation } from 'framer-motion';
import { stacks } from '@/context/data';

const ComponentWrap = styled.div`
  margin-top: 60px;
`;

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

const mapImages = ({ isScrolling, controls }) =>
  _.map(images, (img) => (
    <AnimatedImage
      key={img.alt}
      whileHover={isScrolling ? { scale: 0 } : { scale: 2 }}
      transition={{ duration: 0.3, type: 'tween' }}
    >
      <Image src={img.src} alt={img.alt} />
    </AnimatedImage>
  ));

export default function MeritMedical() {
  const [isScrolling, setIsScrolling] = useState(false);
  const controls = useAnimation();
  console.log(stacks);
  console.log(stacks.meritMedical);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        console.log('this is happening');
        setIsScrolling(true);
        controls.stop();
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <ComponentWrap>
      <TitleWrap>
        <ThinTitle>Merit Medical</ThinTitle>
      </TitleWrap>
      <ImageContainer>{mapImages(isScrolling, controls)}</ImageContainer>
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
    </ComponentWrap>
  );
}
