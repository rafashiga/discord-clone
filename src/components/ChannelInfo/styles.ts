import styled from 'styled-components';
import { Hashtag } from '@styled-icons/heroicons-outline';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: CI;

  display: flex;
  align-items: center;
  padding: 0 ${rem('17px')};
  background: var(--primary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

export const HashtagIcon = styled(Hashtag)`
  width: ${rem('24px')};
  height: ${rem('24px')};
  color: var(--symbol);
`;

export const Title = styled.h1`
  margin-left: 9px;
  font-size: 1rem;
  color: var(--white);
  font-weight: bold;
`;

export const Separator = styled.div`
  height: ${rem('24px')};
  width: 1px;
  background-color: var(--white);
  opacity: 0.2;
  margin: 0 ${rem('13px')};
`;

export const Description = styled.span`
  font-size: ${rem('15px')};
  color: var(--gray);
`;
