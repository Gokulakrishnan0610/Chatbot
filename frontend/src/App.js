import React, { useState } from 'react';
import ChatBot from './components/ChatBot';

const App = () => {
  const [isChatBotVisible, setIsChatBotVisible, botIcon] = useState(false);
  const toggleChatBot = () => {
    setIsChatBotVisible(!isChatBotVisible);
  };

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden  flex justify-end items-end p-4">
      <div
        className={`btn  text-white flex justify-center  items-center ${isChatBotVisible ? "bg-white text-white w-10 h-10 p-0 m-0 text-center shadow-none" : " nav-bg-color  "} p-3 rounded-full fixed bottom-5 right-5 cursor-pointer shadow-lg font-semibold`}
        onClick={toggleChatBot}
      >
        {isChatBotVisible ? (
          <p className='text-2xl'>🤖</p>
        ) : (
          <span className="text capitalize ">bot</span>
        )}
      </div>

      {isChatBotVisible && (
        <ChatBot />
      )}
    </div>
  );
};

export default App;
