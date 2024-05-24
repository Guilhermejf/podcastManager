import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-epsodes-service";

export const getListEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(await serviceListEpisodes(req, res)));
};
