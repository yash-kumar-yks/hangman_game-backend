const MAX_LIVES = 6;

async function serializeGameSession(gameSession) {
  const gameSessionWord = await gameSession.getWord();
  const ActualWord = gameSessionWord.title;
  const Played_letters = gameSession.Played_letters.split("");

  const word_set = new Set([...ActualWord]);
  const played_set = new Set([...Played_letters]);
  const wrong_letters = Played_letters.filter((letter) => {
    return !word_set.has(letter);
  });
  const lives = MAX_LIVES - wrong_letters.length;

  const maskedWord = [...ActualWord].map((letter) =>
    played_set.has(letter) ? letter : "_"
  );

  return {
    id: gameSession.id,
    livesLeft: lives,
    result: !!gameSession.endedAt,
    maskedWord: maskedWord,
  };
}

module.exports = serializeGameSession;