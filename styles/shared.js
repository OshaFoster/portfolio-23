import styled from 'styled-components';
import { colors } from '../styles/colors';
import { motion } from 'framer-motion';
import { css } from 'styled-components';

export const sizes = {
  breakpoints: {
    xLargeMinWidth: 1800,
    mediumMaxWidth: 1250,
    smallMaxWidth: 648,
    xSmallMaxWidth: 375,
  },
  margin: {
    pageLeft: '10vw',
  },
};

export const media = {
  xSmall: (...args) => css`
    @media (max-width: ${sizes.breakpoints.xSmallMaxWidth}px) {
      ${css(...args)}
    }
  `,
  small: (...args) => css`
    @media (max-width: ${sizes.breakpoints.smallMaxWidth}px) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${sizes.breakpoints.mediumMaxWidth}px) {
      ${css(...args)}
    }
  `,
  xLarge: (...args) => css`
    @media (min-width: ${sizes.breakpoints.xLargeMinWidth}px) {
      ${css(...args)}
    }
  `,
};

export const Title = styled.h1`
  font-size: 44px;
  color: ${colors.text};
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-top: 60px;
  /* background-color: red; */
`;

export const ThinTitle = styled.h2`
  font-size: 22px;
  color: ${colors.text};
  font-weight: 300;
  margin-block-start: 0em;
  margin-block-end: 0em;
  /* background-color: green; */
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${colors.text};
  font-weight: 200;
  margin-block-start: 0em;
  margin-block-end: 0em;
    /* background-color: green;      */
`;

export const Span = styled.span`
  color: ${colors.decorationLight};
`

export const DateText = styled.p`
  font-size: 18px;
  line-height: 25px;
  color: ${colors.decorationLight};
  font-weight: 200;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-top: 5px;
`;

export const TextWrap = styled.div`
  max-width: 570px;
    /* background-color: red; */
`;

export const Decoration = styled.div`
height: 2px;
width: 70px;
background-color: ${colors.decoration};
margin-bottom: 30px;
margin-top: 15px;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: ${colors.highlight};
}
`;

const ComponentWrap = styled.div`
  margin-top: 60px;
`;

export const AnimatedComponentWrap = motion(ComponentWrap);

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

