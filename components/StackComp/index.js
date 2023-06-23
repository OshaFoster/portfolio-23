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
  margin: 5px;
  font-size: 16px;
  color: ${colors.highlight};
  padding: 5px 12px;
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
  const { ref, inView, entry } = useInView({
    triggerOnce: false, // Optionally trigger the callback only once
    threshold: 0.05, // Percentage of element visibility required to trigger the callback
  });

  useEffect(() => {
    if (inView) {
      setElementVisible(true);
    } else {
      setElementVisible(false);
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
