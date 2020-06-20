import styled from 'styled-components';
import { AlternateEmail } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: CD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: ${rem('20px')} 0;
  display: flex;
  flex-direction: column;

  max-height: calc(100vh - ${rem('46px')} - ${rem('68px')});
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 1rem;
`;

export const Input = styled.input`
  width: 100%;
  height: ${rem('44px')};

  padding: 0 ${rem('10px')} 0 ${rem('57px')};
  border-radius: 7px;

  color: var(--white);
  background-color: var(--chat-input);
  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -50%;
    left: ${rem('14px')};
    transition: 180ms ease-in-out;
  }
`;

export const InputIcon = styled(AlternateEmail)`
  width: ${rem('24px')};
  height: ${rem('24px')};

  color: var(--gray);
`;
