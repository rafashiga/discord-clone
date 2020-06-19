import styled from 'styled-components';
import { Props } from './index';
import { rem } from 'polished';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: ${rem('48px')};
  height: ${rem('48px')};
  border-radius: 50%;

  margin-bottom: ${rem('8px')};
  background-color: ${(props) =>
    props.isHome ? 'var(--rocketseat)' : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  > img {
    width: ${rem('24px')};
    height: ${rem('24px')};
  }

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: ${rem('-17px')};
    /* top: calc(50% - 4.5px); */
    background-color: var(--white);
    border-radius: 50%;
    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 1rem;
    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: ${rem('12px')};
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: ${rem('14px')};
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'block' : 'none'};
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 1rem;
    background-color: ${(props) =>
      props.isHome ? 'var(--rocketseat)' : 'var(--discord)'};
  }
`;
