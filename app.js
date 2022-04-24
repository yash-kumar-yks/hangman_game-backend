const Express = require("express");
const Router = require("./routes");
const { sequelize, Word } = require("./models");
const res = require("express/lib/response");
require("dotenv").config();

async function initialize() {
  const app = Express();
  app.use(Express.json());
  app.use((req,res,next) =>{
    res.set("Access-Control-Allow-Origin","https://imaginative-mochi-a26431.netlify.app");
    res.set("Access-Control-Allow-Headers","Content-type");
    next();
  })
  // app.get('/', (res,req) =>{
  //   req.send("hello");
  // })
  app.use("/api", Router);
  await sequelize.sync();
  await Word.bulkCreate([
    {title:"bazzinga"},
    {
      title:"house"},
    {
      title:"sheldon"
    }
  ])
  app.listen(process.env.PORT || 7000, () => {
    console.log('Running application on port 7000}');
  });
}

initialize();
