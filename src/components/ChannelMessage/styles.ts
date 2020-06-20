import styled from 'styled-components';
import { AlternateEmail } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;

  padding: 4px 1rem;
  margin-right: 4px;

  background-color: transparent;

  &.mention {
    background: var(--mention-message);
    border-left: 2px solid var(--mention-message);
    padding-left: ${rem('14px')};
  }

  & + div {
    margin-top: ${rem('13px')};
  }
`;

export const Avatar = styled.div`
  width: ${rem('40px')};
  height: ${rem('40px')};

  background-color: var(--secondary);
  border-radius: 50%;

  &.bot {
    background-color: var(--mention-detail);
  }
`;

export const Message = styled.div`
  min-height: ${rem('40px')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: ${rem('17px')};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  > strong {
    color: var(--white);
    font-size: 1rem;
  }

  > span {
    margin-left: 6px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: ${rem('11px')};
  }

  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: ${rem('13px')};
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 1rem;
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
