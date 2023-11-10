var pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Do you have a map? I keep getting lost in your eyes.",
    "Is your name Google? Because you have everything I've been searching for.",`Are you a 45 degree angle? Because you’re acute-y!`,

  `I lost my rubber duckie. Would you bathe with me instead?` 
  ,
  `Are you the ocean? Cuz baby I want to swim in you all day`
  ,
  `Are you a volcano? Because i lava you`
  ,
  `Are you from Russia? ‘Cause you’re russian my heart rate!`
  ,
  `You look cold. Want to use me as a blanket?`

  ,
  `I might be ugly but I’ll treat you right!`
  ,
  `Are you netflix? Because i could watch you for hours.`
  ,
  `Charzards are red Squitals are blue if u were a Pokemon i would choose you!`
  ,
  `Do you like star wars? Because yoda only one for me!`
  ,
  `Are you made out of grapes? Because you are fine as wine!`
  ,
  `You can’t be my first, but you can be my last`
  ,
  `I’m afraid of the dark… Will you sleep with me tonight?`
  ,
  `Is your name Ariel? Cause we Mermaid for each other!,`,
  `Are you the cure for Alzheimer’s? Because you’re unforgettable.`,
  `When I’m older, I’ll look back at all of my crowning memories, and I’ll think of the day my children were born, the day I got married, and the day that I met you.`,
  `Can I borrow a quarter? [“What for?”] I want to call my mom and tell her I just met the man/woman of my dreams.`,
  `You can’t be my first, but you could be my next.`,
  `Spoon me like your favorite ice cream!`,

  `Keep an eye out for elves with ropes and a blindfold! Why? Cause I asked Santa for you this Christmas`,

  `Are you as beautiful on the inside as you are on the outside?`,

  `The letter ‘X’ scares me [Why?] Because I never want to be yours.`,
  `You so lovely, you make me wanna go out and get a job`,

  `You know how I got these guns? [Point to biceps] Lifting children out of poverty.`,

  `Your mom told me to say “Hi” to you`,
   "Are you made of copper and tellurium? Because you're Cu-Te.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you a parking ticket? Because you've got 'FINE' written all over you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Excuse me, but I think the stars tonight are outshone by your beauty.",
    "If beauty were time, you'd be an eternity.",
    "Is your name Wi-fi? Because I'm feeling a connection.",
    "Excuse me, but I think you dropped something: MY JAW!",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a name, or can I call you mine?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you have a sun map? Because I just got lost in your solar system.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you like Star Wars? Because Yoda one for me!",
    "Are you a parking ticket? Because you've got 'FINE' written all over you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Excuse me, but I think the stars tonight are outshone by your beauty.",
    "If beauty were time, you'd be an eternity.",
    "Is your name Wi-fi? Because I'm feeling a connection.",
    "Excuse me, but I think you dropped something: MY JAW!",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a name, or can I call you mine?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you have a sun map? Because I just got lost in your solar system.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you like Star Wars? Because Yoda one for me!",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Are you a parking ticket? Because you've got 'FINE' written all over you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Excuse me, but I think the stars tonight are outshone by your beauty.",
    "If beauty were time, you'd be an eternity.",
    "Is your name Wi-fi? Because I'm feeling a connection.",
    "Excuse me, but I think you dropped something: MY JAW!",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a name, or can I call you mine?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you have a sun map? Because I just got lost in your solar system.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you like Star Wars? Because Yoda one for me!",
    "Are you a parking ticket? Because you've got 'FINE' written all over you.",
    "Do you believe in love at first sight, or should I walk by again?",
    "Excuse me, but I think the stars tonight are outshone by your beauty.",
    "If beauty were time, you'd be an eternity.",
    "Is your name Wi-fi? Because I'm feeling a connection.",
    "Excuse me, but I think you dropped something: MY JAW!",
    "Are you a camera? Because every time I look at you, I smile.",
    "Do you have a sunburn, or are you always this hot?",
    "If you were a vegetable, you'd be a cute-cumber!",
    "Do you have a name, or can I call you mine?",
    "Is your name Ariel? Because we mermaid for each other.",
    "Do you have a sun map? Because I just got lost in your solar system.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you like Star Wars? Because Yoda one for me!",
  ];

  var unusedPickupLines = pickupLines.slice();

  function showText() {
    var cardHolder = document.getElementById('bodymg');
    var textSection = document.getElementById('textSection');
    var displayText = document.getElementById('displayText');

    if (unusedPickupLines.length === 0) {
      unusedPickupLines = pickupLines.slice();
    }

    var randomIndex = Math.floor(Math.random() * unusedPickupLines.length);
    var randomPickupLine = unusedPickupLines[randomIndex];

    displayText.textContent = randomPickupLine;

    unusedPickupLines.splice(randomIndex, 1);

    cardHolder.style.display = 'none';
    textSection.style.display = 'block';
  }

  function regenerateText() {
    var textSection = document.getElementById('textSection');
    var displayText = document.getElementById('displayText');

    if (unusedPickupLines.length === 0) {
      unusedPickupLines = pickupLines.slice();
    }

    var randomIndex = Math.floor(Math.random() * unusedPickupLines.length);
    var randomPickupLine = unusedPickupLines[randomIndex];

    displayText.textContent = randomPickupLine;

    unusedPickupLines.splice(randomIndex, 1);

    // You can keep the card holder hidden
    textSection.style.display = 'block';
  }
