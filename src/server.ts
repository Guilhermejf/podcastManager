import * as http from "http";
import chalk from "chalk";
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";

const port = process.env.PORT;
const server = http.createServer(async (request, response) => {


  const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];
  

  if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
    await getFilterEpisodes(request,response)
  }
});

server.listen(port, () => {
  console.log(chalk.greenBright("Servidor inciado e rodando na porta", port));
});
