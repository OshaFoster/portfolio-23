import { useState, useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '../../styles/colors';


import { StackContext } from '../../context/StackContext';

const Item = styled.div`
  background-color: ${colors.highlightLight};
  border-radius: 5px;
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 5px 10px 5px 0px;
  font-size: 14px;
  color: ${colors.highlight};
  padding: 5px 10px;
`;
const Wrap = styled.div`
  display: inline-block;
  /* margin: 25px 0px; */
`;

const StackWrap = styled.div`
  margin: 20px 0px;
`

export default function StackComp({ stack }) {
  const { inViewStack, setInViewStack } = useContext(StackContext);
  const [isElementVisible, setElementVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false, // Optionally trigger the callback only once
    threshold: 0.1, // Percentage of element visibility required to trigger the callback
  });

  useEffect(() => {
    if (inView) {
      setElementVisible(true);
      console.log('truthy')
    } else {
      setElementVisible(false);
      console.log('falsy')
    }
    if (isElementVisible) {
      setInViewStack(stack);
    }
  }, [inView, isElementVisible, ref, stack, setInViewStack, inViewStack]);

  return (
    <StackWrap>
      {_.map(stack, (item) => {
        return (
          <Wrap ref={ref} key={item}>
            <Item>{item}</Item>
          </Wrap>
        );
      })}
    </StackWrap>
  );
}
