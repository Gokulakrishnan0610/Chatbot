const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5500;
const predefinedAnswers = require('./data')
app.use(express.json());
app.use(cors());

const getBotAnswer = (input) => {
  const lowerCaseInput = input.toLowerCase();
  const foundAnswer = predefinedAnswers.find((qa) =>
    lowerCaseInput.includes(qa.question)
  );
  return foundAnswer
    ? foundAnswer.answer
    : "Sorry, I didn't understand that. Can you please ask something else?";
};


app.get('/api/defaultMessage', (req, res) => {
 

 
  return res.json({ botreply: "Hi there! How can I help you today?" });
});
app.post('/api/input', (req, res) => {
  const userInput = req.body.input;

  if (!userInput) {
    return res.status(400).json({ error: 'Input is required' });
  }

  const botResponse = getBotAnswer(userInput);
  return res.json({ botreply: botResponse });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
