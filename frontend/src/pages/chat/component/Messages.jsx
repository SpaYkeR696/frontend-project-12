import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { messagesSelector } from '../../../redux/slices/messagesSlice.js';
import { channelIdSelector } from '../../../redux/slices/channelsSlice.js';

const Messages = () => {
  const currentChannelID = useSelector(channelIdSelector);
  const messages = useSelector(messagesSelector);

  useEffect(() => {
    const messagesBox = document.getElementById('messages-box');
    const scHeight = messagesBox.scrollHeight;
    messagesBox.scrollTop = scHeight;
  });

  return messages
    .filter(({ channelId }) => channelId === currentChannelID)
    .map((message, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div className="text-break mb-2" key={index}>
        <div>
          <div className="d-inline-block shadow p-3 bg-body rounded">
            <b>
              {message.username}
              :
            </b>
            <span className="message ms-2">{message.body}</span>
          </div>
        </div>
      </div>
    ));
};

export default Messages;
