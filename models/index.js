const { Sequelize, Model, DataTypes } = require("@sequelize/core");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});
class GameSession extends Model {}
GameSession.init(
  {
    Player_name: DataTypes.STRING,
    Played_letters: DataTypes.STRING,
    StartedAt: DataTypes.DATE,
    EndedAt: DataTypes.DATE,
  },
  { sequelize, modelName: "game_sessions" }
);
class Word extends Model {}
Word.init(
  {
    title: DataTypes.STRING,
  },
  { sequelize, modelName: "words" }
);

GameSession.Word = GameSession.belongsTo(Word);

module.exports = {
  GameSession,
  Word,
  sequelize,
};