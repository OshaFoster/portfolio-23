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
  Span,
  media,
  sizes,
} from '@/styles/shared';

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
    height: 1000px;
  `}
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

const mapImages = (images, stopHover) => {
  const transformedImages = _.map(images, (img, i) => {
    let x = 8;
    if (i === 0) {
      x = 80;
    }
    if (i === 2) {
      x = -80;
    }
    if (stopHover) {
      x = 8;
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

export default function DigNDirt() {
  const scrollRef = useRef(null);
  const { inViewStack, setInViewStack } = useContext(Context);
  const [isElementVisible, setElementVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
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

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window?.innerWidth);
    }

    window?.addEventListener('resize', handleResize);

    return () => {
      window?.removeEventListener('resize', handleResize);
    };
  }, []);

  const stopHover = windowWidth < sizes.breakpoints.smallMaxWidth;

  return (
    <>
      <AnimatedComponentWrap
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ root: scrollRef, once: false }}
      >
        <TitleWrap>
          <ThinTitle>DigNDirt</ThinTitle>
        </TitleWrap>
        <ImageContainer>{mapImages(dndImages, stopHover)}</ImageContainer>

        <TextWrap>
          <Text ref={ref}>
            Created DND mobile application to optimize the efficiency of
            excavators in finding and transporting dirt, highlighting my ability
            to identify and <Span>&nbsp;solve real-world problems&nbsp;</Span>{' '}
            using technology.
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
        <ImageContainer>{mapImages(eqtImages, stopHover)}</ImageContainer>
        <TextWrap>
          <Text>
            Contributed to the development of EQT mobile application for
            managing inventory and maintenance of heavy machinery, utilizing my
            technical expertise and <Span>&nbsp;teamwork skills&nbsp;</Span> to
            ensure successful delivery of the application.
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
        <ImageContainer>{mapImages(hndImages, stopHover)}</ImageContainer>

        <TextWrap>
          <Text>
            Developed HND mobile application to help excavators manage clients
            and trucking assignments, showcasing my proficiency in developing
            mobile apps with<Span>&nbsp;complex functionality&nbsp;</Span>.
          </Text>
          <StackComp stack={'dnd'} />
        </TextWrap>
      </AnimatedComponentWrap>
    </>
  );
}
