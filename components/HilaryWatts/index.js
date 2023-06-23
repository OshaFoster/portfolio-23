import styled, { keyframes } from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { Text, ThinTitle, TextWrap } from '../../styles/shared';
import { colors } from '@/styles/colors'
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
const hoverAnimation = keyframes`
  from {
    transform: scale(1);
    z-index: 1;
  }
  to {
    transform: scale(2);
    z-index: 2;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 277px;
  height: 158px;
  overflow: hidden;
  border-radius: 3px;
  margin-right: 10px;
  transition: transform 0.4s ease-in-out;
  /* background-color: orange; */

  &:hover {
    transform: scale(2);
    z-index: 2;
    box-shadow: 0 0 25px #111729;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: ${hoverAnimation} 0.4s ease-in-out;
`;

const images = [
  { src: '/static/images/h1.png', alt: 'mm img 1' },
  { src: '/static/images/h2.png', alt: 'mm img 2' },
  { src: '/static/images/h3.png', alt: 'mm img 3' },
  { src: '/static/images/h4.png', alt: 'mm img 4' },
];

const mapImages = () =>
  _.map(images, (img) => (
    <ImageWrap key={img.alt}>
      <Image src={img.src} alt={img.alt} />
    </ImageWrap>
  ));

export default function HilaryWatts({whichStack}) {
  return (
    <ComponentWrap>
      <TitleWrap>
        <ThinTitle>Hilary Watts </ThinTitle>
      </TitleWrap>
      <ImageContainer>{mapImages()}</ImageContainer>
      <TextWrap>
        <Text>
          LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
          create label sets   <span
                style={{
                  color: colors.decorationLight,
                  opacity: 1,
                }}
              >
              &nbsp;natural problem solver&nbsp;
              </span>for medical supplies. • Developed the frontend
          interface and connected it to a Django backend, ensuring seamless
        </Text>
      <StackComp stack={stacks.hilaryWatts} />
      </TextWrap>
    </ComponentWrap>
  );
}
