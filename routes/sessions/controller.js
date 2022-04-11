
async function Createsession(req, res) {
  const name = req.body.name;
  

  

  res.json({
      name:name,
      id:"123"
  });
}

async function Playsession(req, res) {
  const gameID = req.params.id;
  const letter = req.body.letter;
  
  res.json({
    "id":gameID,
    "letter":letter

})
}

module.exports = {
  Createsession,
  Playsession,
};