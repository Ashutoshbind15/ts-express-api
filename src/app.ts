// console.log("hello");
import express from "express";
import config from "config";
import { connect } from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const app = express();
const port = config.get<number>("port");

app.listen(port, async () => {
  logger.info("Server is running on port 3000");

  await connect();

  routes(app);
});
