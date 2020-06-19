import styled from 'styled-components';
import { Mic, Headset, Settings } from '@styled-icons/material';
import { rem } from 'polished';

export const Container = styled.div`
  grid-area: UI;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${rem('10px')};
  background-color: var(--quaternary);
  box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: ${rem('32px')};
  height: ${rem('32px')};
  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  margin-left: ${rem('8px')};
  display: flex;
  flex-direction: column;
  font-size: ${rem('13px')};

  > strong {
    display: block;
    color: var(--white);
  }

  > span {
    color: var(--gray);
  }
`;

export const Icons = styled.div`
  > svg:not(:first-child) {
    margin-left: 7px;
  }
`;

export const MicIcon = styled(Mic)`
  width: ${rem('20px')};
  height: ${rem('20px')};
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: ${rem('20px')};
  height: ${rem('20px')};
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;

export const SettingIcon = styled(Settings)`
  width: ${rem('20px')};
  height: ${rem('20px')};
  color: var(--white);
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`;
