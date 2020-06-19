import styled from 'styled-components';
import { Add } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: CL;

  display: flex;
  flex-direction: column;

  padding: ${rem('24px')} ${rem('9.5px')} 0 ${rem('16px')};
  background-color: var(--secondary);
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 6px;

  > span {
    text-transform: uppercase;
    font-size: ${rem('12px')};
    color: var(--gray);
  }
`;

export const AddCategoryIcon = styled(Add)`
  width: ${rem('21px')};
  height: ${rem('21px')};

  color: var(--symbol);
  cursor: pointer;
`;
