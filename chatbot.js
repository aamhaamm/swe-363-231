const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const qaPairs = {
  "how are you?": "I'm good, thank you!",
  "what is your name?": "I'm a simple Node.js chatbot.",
  "what can you do?": "I can chat with you based on predefined questions and answers.",
  "what is node.js?": "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  "exit": "Goodbye!"
};

const getResponse = (input) => {
  input = input.toLowerCase().trim();
  return qaPairs[input] || "Sorry, I don't understand that. Can you try asking something else?";
};

const startChatBot = () => {
  rl.setPrompt('You: ');
  rl.prompt();

  rl.on('line', (userInput) => {
    if (userInput.toLowerCase().trim() === 'exit' || userInput.toLowerCase().trim() === 'quit') {
      console.log('Chatbot: Goodbye!');
      rl.close();
    } else {
      const response = getResponse(userInput);
      console.log('Chatbot:', response);
      rl.prompt();
    }
  }).on('close', () => {
    console.log('Chatbot session has ended.');
    process.exit(0);
  });
};

startChatBot();
