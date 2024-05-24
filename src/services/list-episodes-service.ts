import { IncomingMessage, ServerResponse } from "http";
import { repoPodcast } from "../repositories/podcast-repository"

export const serviceListEpisodes = async (req: IncomingMessage, res: ServerResponse)=>{
    
    return await repoPodcast()
    
  
}