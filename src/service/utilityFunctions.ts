const RANDOM_WORDS: string[] = [
  "cats",
  "ice",
  "bear",
  "code",
  "thumb",
  "island",
  "drink",
  "wife",
  "eye",
  "fish",
  "monster",
  "adventure",
  "coin",
  "shell",
];

export function getRandomWords(
  randomOne: number,
  randomTwo: number,
  randomThree: number
) {
  return [
    RANDOM_WORDS[randomOne],
    RANDOM_WORDS[randomTwo],
    RANDOM_WORDS[randomThree],
  ];
}

export function generateRandomNumbers() {
  const numbers: number[] = [];

  while (numbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 10);

    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }

  return numbers;
}
