import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton/index';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton selected={true} channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="games" />
    </Container>
  );
};

export default ChannelList;
