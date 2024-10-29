import { createContext, useContext, useState } from "react";
import axios from 'axios'

const Contex = createContext()

export const ContexProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');


    const botIcon =  "🤖";
    const userIcon = "👤";

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;
    
        const userMessage = {
          id: messages.length,
          text: userInput,
          sender: 'user'
        };
        setMessages((prevMessages) => [...prevMessages, userMessage]);
    
        axios.post("http://localhost:5500/api/input", { input: userInput })
          .then((response) => {
            const botMessage = {
              id: messages.length + 1,
              text: response.data.botreply,
              sender: 'bot'
            };
    
            setTimeout(() => {
              setMessages((prevMessages) => [...prevMessages, botMessage]);
            }, 1000);
          })
          .catch((error) => {
            console.error(error);
          });
    
        setUserInput(''); 
      };
    return (
        <Contex.Provider value={{
            messages, setMessages, userInput, setUserInput, botIcon, userIcon,handleSendMessage
        }}>
            {children}



        </Contex.Provider>
    )
}

export const useCustomContext = () => {
    return useContext(Contex);
};

