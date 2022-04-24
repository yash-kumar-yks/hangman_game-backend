const Sequelize = require("sequelize");
const { Word, GameSession, sequelize } = require("../../models");
const serializeGameSession = require("../../serializers/gameSession");
const gameSessionService = require("../../services/game_session_service");
async function Createsession(req, res) {
  const name = req.body.name;
  const word = await Word.findOne({
    order: sequelize.random(),
  });

  //const word = await Word.findOne();

  const gameSession = await GameSession.create({
    Player_name: name,
    Played_letters: "",
    wordId: word.id,
    StartedAt: new Date(),
  });

  res.json(await serializeGameSession(gameSession));
}

async function Playsession(req, res) {
  const gameID = req.params.id;
  const letter = req.body.letter;
  const gameSession = await GameSession.findByPk(gameID);

  await gameSessionService.playWordInGameSession(gameSession, letter);

  res.json(await serializeGameSession(gameSession));
}

module.exports = {
  Createsession,
  Playsession,
};