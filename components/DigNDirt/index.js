import styled, { keyframes } from 'styled-components';
import _ from 'lodash';
import StackComp from '../StackComp';
import { Text, ThinTitle, TextWrap } from '@/styles/shared';
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
  height: 300px;
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
  height: 277px;
  width: 138px;
  overflow: hidden;
  border-radius: 23px;
  margin-right: 40px;
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
  object-fit: contain;
  animation: ${hoverAnimation} 0.4s ease-in-out;
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
    <ImageWrap key={img.alt}>
      <Image src={img.src} alt={img.alt} />
    </ImageWrap>
  ));

export default function DigNDirt() {
  return (
    <>
      <ComponentWrap>
        <TitleWrap>
          <ThinTitle>DigNDirt</ThinTitle>
        </TitleWrap>
        <ImageContainer>{mapImages(dndImages)}</ImageContainer>

        <TextWrap>
          <Text>
            LeaddeveloperofaReactNativeapplicationforthewebthatallowedclients to
            create label sets for medical supplies. • Developed the frontend
            interface and connected it to a Django backend, ensuring seamless
          </Text>
          <StackComp stack={stacks.dnd} />
        </TextWrap>
      </ComponentWrap>
      <ComponentWrap>
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
          <StackComp stack={stacks.dnd} />
        </TextWrap>
      </ComponentWrap>
      <ComponentWrap>
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
          <StackComp stack={stacks.dnd} />
        </TextWrap>
      </ComponentWrap>
    </>
  );
}
