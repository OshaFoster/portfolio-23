import styled from 'styled-components';
import { colors } from '../styles/colors';

export const Title = styled.h1`
  font-size: 44px;
  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
  /* background-color: red; */
`;

export const ThinTitle = styled.h2`
  font-size: 22px;
  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  margin-block-start: 0em;
  margin-block-end: 0em;
  /* background-color: green; */
`;

export const Text = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: ${colors.text};
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const DateText = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: ${colors.decorationLight};
  font-family: 'Oswald', sans-serif;
  font-weight: 200;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const TextWrap = styled.div`
  width: 65%;
`;

export const Decoration = styled.div`
height: 2px;
width: 70px;
background-color: ${colors.decoration};
margin-bottom: 40px;
margin-top: 20px;
transition: background-color 0.3s ease-in-out;

&:hover {
  background-color: ${colors.highlight};
}
`;
