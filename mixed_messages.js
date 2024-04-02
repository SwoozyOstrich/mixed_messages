const messages = [
    "The quick brown fox",
    "jumps over",
    "the lazy dog",
    "and lands on",
    "a fluffy pillow",
    "Roses are red",
    "Violets are blue",
    "Unexpected plot twist:",
    "The butler did it!",
    "Knock knock!",
    "Who's there?",
    "Orange you glad",
    "I didn't say banana?",
    "In a galaxy far, far away",
    "a brave Jedi",
    "faces off against",
    "the dark side",
    "The future belongs",
    "to those who believe",
    "in the beauty of their dreams",
    "Keep calm",
    "and carry on",
    "with a smile on your face",
    "Life is like a box of chocolates",
    "You never know",
    "what you're gonna get",
    "When life gives you lemons",
    "make lemonade",
    "and throw a party!",
    "Every cloud has",
    "a silver lining",
    "if you look hard enough"
  ];

  function generateMixedMessages(arr) {
    const numParts = 3;
    const selectedMessages = [];

    for (let i = 0; i < numParts; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    selectedMessages.push(arr[randomIndex]);     
    }

    return selectedMessages.join(' ');
  }

  console.log(generateMixedMessages(messages));