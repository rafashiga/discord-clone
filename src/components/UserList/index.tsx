import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Shiga" />

      <Role>Offline - 18</Role>
      <UserRow nickname="Fulano Silva" isBot />
      {Array(20)
        .fill(0)
        .map((_, index) => (
          <UserRow key={index} nickname={'Fulano' + index} />
        ))}
    </Container>
  );
};

export default UserList;
