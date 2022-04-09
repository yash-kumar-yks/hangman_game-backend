const Express = require("express");
const Router = require("./routes");


async function initialize() {
  const app = Express();
  app.use(Express.json());
  // app.get('/', (res,req) =>{
  //   res.send("hello");
  // })
  app.use("/api", Router);
  app.listen(7000, () => {
    console.log("Running application on port 7000");
  });
}

initialize();