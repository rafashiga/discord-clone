import styled from 'styled-components';
import { Hashtag } from '@styled-icons/heroicons-outline';
import { PersonAdd, Settings } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  padding: 5px 3px;
  border-radius: 5px;

  background-color: transparent;
  transition: background-color 0.2s;
  font-size: 1rem;

  > div {
    display: flex;
    align-items: center;
  }

  > div span {
    margin-left: 5px;
    color: var(--senary);
  }

  &:hover,
  &.active {
    background-color: var(--quinary);
    color: var(--white);

    > div span {
      color: var(--white);
    }

    /* > div svg {
      display: inline;
    } */
  }
`;

export const HashtagIcon = styled(Hashtag)`
  width: ${rem('20px')};
  height: ${rem('20px')};
  color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
  width: ${rem('16px')};
  height: ${rem('16px')};
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  margin-right: 3px;
  /* display: none; */

  &:hover {
    color: var(--white);
  }
`;

export const SettingIcon = styled(Settings)`
  width: ${rem('16px')};
  height: ${rem('16px')};
  color: var(--symbol);
  cursor: pointer;
  transition: color 0.2s;
  /* display: none; */

  &:hover {
    color: var(--white);
  }
`;
