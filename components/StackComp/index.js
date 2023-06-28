import { useContext } from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { colors } from '../../styles/colors';


import { Context } from '../../context/Context';

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
`;

const StackWrap = styled.div`
  margin: 120px 0px;
`

export default function StackComp({ stack }) {
  const { allStacks } = useContext(Context);
  return (
    <StackWrap>
      {_.map(allStacks[stack], (item) => {
        return (
          <Wrap key={item}>
            <Item>{item}</Item>
          </Wrap>
        );
      })}
    </StackWrap>
  );
}
