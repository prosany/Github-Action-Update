const message = [
  "Nice work!",
  "Excellent job on that project.",
  "Thanks for helping out.",
  "Wow, that's impressive work.",
  "Outstanding work!",
  "You truly make a difference here.",
  "Your work is incredible.",
  "Your progress is truly inspiring.",
  "Your contributions are noticed.",
  "Beautiful work.",
  "Fantastic!",
];

module.exports = {
  getRandomMessage: () => {
    const randomIndex = Math.floor(Math.random() * message.length);
    return message[randomIndex];
  },
};
