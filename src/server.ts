import * as http from "http";
import chalk from "chalk";
import { getListEpsodes } from "./controllers/podcasts-controller";

const port = process.env.PORT;
const server = http.createServer(async (req, res) => {
  if (req.method === "GET") {
    await getListEpsodes(req, res);
  }
});

server.listen(port, () => {
  console.log(chalk.greenBright("Servidor inciado e rodando na porta", port));
});
