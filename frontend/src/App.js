import React, { useEffect, useState } from 'react';
import ChatBot from './components/ChatBot';
import { useCustomContext } from './service/ServiceProvider';

const App = () => {
  const [isChatBotVisible, setIsChatBotVisible] = useState(false);
  const {defaultMessage}=useCustomContext()
  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };

  useEffect(() => {
    defaultMessage()
  }, [])



  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden  flex justify-end items-end p-4">
      <div
        className={`btn  text-white flex justify-center  items-center  p-3 rounded-full fixed bottom-5 right-5 cursor-pointer  font-semibold`}
        onClick={toggleChatBot}
      >

        <span className='text-3xl '>🤖</span>
      </div>

      {isChatBotVisible && (
        <ChatBot />
      )}
    </div>
  );
};

export default App;
