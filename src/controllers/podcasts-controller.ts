import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";

export const getListEpsodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const content = await serviceListEpisodes(req, res)
  res.end(JSON.stringify(content));
};
