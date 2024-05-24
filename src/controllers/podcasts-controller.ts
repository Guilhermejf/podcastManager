import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisodes } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { StatusCode } from "../utils/status-code";

export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
  res.writeHead(StatusCode.OK, { "Content-Type": "application/json" });
  const content = await serviceListEpisodes(req, res)
  res.end(JSON.stringify(content));
};

export const getFilterEpisodes = async(req: IncomingMessage,res: ServerResponse) => {
  
  const content = await serviceFilterEpisodes(req.url)
  res.writeHead(StatusCode.OK,{"Content-Type": "application/json"});
  res.end(JSON.stringify(content));
}
