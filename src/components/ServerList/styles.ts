import { rem } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  grid-area: SL;
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--tertiary);
  padding: ${rem('11px')} 0;

  max-height: 100vh;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Separator = styled.div`
  width: ${rem('32px')};
  border-bottom: ${rem('2px')} solid var(--quaternary);

  margin-bottom: ${rem('8px')};
`;
