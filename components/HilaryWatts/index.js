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
  media,
} from '@/styles/shared';
import { motion } from 'framer-motion';
import { Context } from '@/context/Context';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 600px;
  height: 400px;
  margin-top: 20px;
  /* background-color: pink; */
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
    ${media.small`
      z-index: 1;
    `}
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
  { src: '/static/images/hw1.png', alt: 'mm img 1' },
  { src: '/static/images/hw2.png', alt: 'mm img 2' },
  { src: '/static/images/hw3.png', alt: 'mm img 3' },
  { src: '/static/images/hw4.png', alt: 'mm img 4' },
];

const mapImages = (stopHover) => {
  const transformedImages = _.map(images, (img, i) => {
    let x = 120;
    if (i % 2) {
      x = -110;
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

export default function HilaryWatts({ stopHover }) {
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
      <TitleWrap>
        <ThinTitle>Hilary Watts </ThinTitle>
      </TitleWrap>
      <ImageContainer>{mapImages(stopHover)}</ImageContainer>
      <TextWrap>
        <Text ref={ref}>
          Developed a <Span>&nbsp;personal website&nbsp;</Span> for Hilary
          Watts. Allowing her to <Span>&nbsp;showcase her skills&nbsp;</Span>{' '}
          including a portfolio, work history, testimonials, and details about
          her specialty. Created a visualy applealing and{' '}
          <Span>&nbsp;fully responsive&nbsp;</Span> website that effectively
          highlights her expertise and experience.
        </Text>
        <StackComp stack={'hilaryWatts'} />
      </TextWrap>
    </AnimatedComponentWrap>
  );
}

