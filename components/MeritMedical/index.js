import { useRef, useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import {
  Text,
  ThinTitle,
  TextWrap,
  Span,
  AnimatedComponentWrap,
  media,
} from '@/styles/shared';
import { motion } from 'framer-motion';
import { Context } from '@/context/Context';

const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  height: 400px;
  margin-top: 20px;
  ${media.small`
  flex-direction: column;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    overflow: scroll;
    margin-bottom: 40px;
    margin-top: 40px;
    height: 800px;
  `}
`;

const ImageWrap = styled.div`
  position: relative;
  width: 277px;
  height: 158px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 10px;
  &:hover {
    z-index: 10;
    box-shadow: 0 0 15px black;
  }

  ${media.small`
  margin-right: 20px;
  `}
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

const mapImages = (stopHover) => {
  const transformedImages = _.map(images, (img, i) => {
    let x = 120;
    if (i % 2) {
      x = -140;
    }
    if (stopHover) {
      x = 0;
    }
    const scale = stopHover ? 1 : 1.8;
    return (
      <AnimatedImage
        key={img.alt}
        whileHover={{ scale: scale, x: x }}
        transition={{ duration: 0.3, type: 'tween' }}
      >
        <Image src={img.src} alt={img.alt} />
      </AnimatedImage>
    );
  });
  return transformedImages;
};

export default function MeritMedical({ stopHover }) {
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
      setInViewStack('meritMedical');
    }
  }, [inView, isElementVisible, ref, setInViewStack, inViewStack]);

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
      <ImageContainer>{mapImages(stopHover)}</ImageContainer>
      <TextWrap ref={ref}>
        <Text>
          <Span>Lead developer&nbsp;</Span> of a React Native application for
          the web that allows clients to create label sets for medical supplies.
          Developed the frontend interface and connected it to a Django backend,
          ensuring <Span>&nbsp;seamless integration&nbsp;</Span> between the
          two.<Span>&nbsp;Supervised the team&nbsp;</Span>of four frontend and
          backend developers, providing guidance and support throughout the
          development process.
        </Text>
        <StackComp stack={'meritMedical'} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}
