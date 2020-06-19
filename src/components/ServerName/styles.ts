import styled from 'styled-components';
import { ExpandMore } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: SN;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 11px 0 16px;
  color: var(--white);

  background-color: var(--secondary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: bold;
`;

export const ExpandIcon = styled(ExpandMore)`
  width: ${rem('28px')};
  height: ${rem('28px')};
  cursor: pointer;
`;
