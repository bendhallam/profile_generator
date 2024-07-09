const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question("What is your name? Nicknames are also acceptable. ", (answer1) => {
  let myName = answer1;
  rl.question(`Okay ${myName}, nice to meet you! What's an activity you like doing? `, (answer2) => {
    let activity = answer2;
    rl.question(`I also like ${activity}! What genre of music do you listen to while doing that? `, (answer3) => {
      let genre = answer3;
      rl.question(`${genre} music rules! What's your favourite meal? (ie. breakfast, lunch, dinner etc.) `, (answer4) => {
        let meal = answer4;
        rl.question(`I could go for ${meal} right now. What do you like to eat for that meal? `, (answer5) => {
          let food = answer5;
          rl.question(`Mmmmmm... ${food}. Anyways what's your favourite sport to watch? `, (answer6) => {
            let sport = answer6;
            rl.question(`So you like to watch ${sport}? Last question: What are you really good at? `, (answer7) => {
              let skill = answer7;
              console.log("Stealing identity...");
              console.log(`My name is ${myName} and I listen to ${genre} music while doing ${activity}. For ${meal} I love to eat ${food} while watching ${sport}. One day I will use my high skill at ${skill} to take over the world.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

