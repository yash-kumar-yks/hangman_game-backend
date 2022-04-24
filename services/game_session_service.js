const MAX_LIVES = 6;
async function markGameCompleted(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const ActualWord = gameSessionWord.title;
  const Played_letters = gameSession.Played_letters.split("");
  const word_set = new Set([...ActualWord]);
  const played_set = new Set([...Played_letters]);
  const wrong_letters = Played_letters.filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = MAX_LIVES - wrong_letters.length;

  const isWon = [...word_set].reduce((acc, curr) => {
    if (!played_set.has(curr)) return false;
    return acc;
  }, true);

  if (lives == 0 || isWon) {
    console.log("Marked Game > if");
    gameSession.endedAt = new Date();
    await gameSession.save();
  }
}

async function playWordInGameSession(gameSession, letter) {
  const Played_letters = gameSession.Played_letters.split("");
  const playedSet = new Set([...Played_letters]);
  if (playedSet.has(letter)) {
    return;
  }
  Played_letters.push(letter);
  gameSession.Played_letters = Played_letters.join("");
  await gameSession.save();
  await markGameCompleted(gameSession);
}

module.exports = {
  playWordInGameSession,
};