import styled from 'styled-components';
import { ExpandMore } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: UL;
  display: flex;
  flex-direction: column;
  padding: 3px 6px 0 1rem;
  background-color: var(--secondary);
  max-height: calc(100vh - ${rem('46px')});
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const Role = styled.span`
  margin-top: ${rem('20px')};

  text-transform: uppercase;
  font-size: ${rem('12px')};
  color: var(--gray);
`;

export const User = styled.div`
  margin-top: 5px;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;

  border-radius: 4px;
  background: transparent;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  > strong {
    margin-left: ${rem('13px')};
    font-weight: 500;
    color: var(--white);
    opacity: 0.7;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    margin-left: 9px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${rem('11px')};
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: ${rem('32px')};
  height: ${rem('32px')};
  background: var(--primary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;