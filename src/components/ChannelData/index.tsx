import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMesage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMesage
          author="Shiga"
          date="01/06/2020"
          content="Hoje é meu aniversário"
        />

        {Array(40)
          .fill(0)
          .map((_, index) => (
            <ChannelMesage
              key={index}
              author="Shiga"
              date="01/06/2020"
              content="Ullamco culpa ex sint et."
            />
          ))}

        <ChannelMesage
          author="Fulano Silva"
          date="01/06/2020"
          isBot
          content={
            <>
              <Mention>@Shiga</Mention> Excepteur ullamco fugiat.
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
