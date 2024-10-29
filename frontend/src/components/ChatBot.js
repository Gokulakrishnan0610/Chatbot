import React, {  useRef, useEffect } from 'react';
import { useCustomContext } from '../service/ServiceProvider';



const ChatBot = () => {
  const { userInput, setUserInput, botIcon, userIcon, messages, handleSendMessage } = useCustomContext()
  const chatWindowRef = useRef(null);

  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="flex items-center justify-center h-screen  ">

      <div className=" bot rounded-xl shadow-lg w-[350px]   max-w-md overflow-hidden bg-[#F7F8FC] ">

        <h2 className="bg-color text-white px-3 text-lg font-bold py-3 rounded-t-lg">Chatbot</h2>


        <div
          ref={chatWindowRef}
          className=" chat-window bg-[#F7F8FC] p-4 h-[300px] overflow-x-hidden overflow-y-auto border-t  "
        >
          {messages && messages.map((msg) => (
            <div key={msg.id} className={`my-2 flex items-end ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'bot' && (
                <div className="w-5 h-5 mr-2">
                  <span>{botIcon}</span>
                </div>
              )}

              <div
                className={`max-w-[75%] p-3  ${msg.sender === 'user'
                  ? ' mess   text-black rounded-s-xl'
                  : ' mess   text-black rounded-e-xl'
                  }`}
              >
                {msg.text}
              </div>

              {msg.sender === 'user' && (
                <div className="w-5 h-5 ml-2">
                  <span>{userIcon}</span>
                </div>
              )}
            </div>
          ))}
        </div>


        <form className=" h-fit flex border-  rounded-xl overflow-hidden border-[1.5px] border-gray-300 bg-[#F7F8FC] ">

          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type the message..."
            className="flex w-full   border-none  py-2 px-4 focus:outline-none "
          />

          {
            userInput.length ?
              <button onClick={handleSendMessage} className="    px-4 py-2    bg-[#305BD4] text-white">
                Sent

              </button> :
              ""
          }

        </form>

      </div>

    </div>

  );
};

export default ChatBot;





