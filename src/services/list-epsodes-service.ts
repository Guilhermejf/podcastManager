import { IncomingMessage, ServerResponse } from "http";

export const serviceListEpisodes = async (req: IncomingMessage, res: ServerResponse)=>{
    
    const data = [
        {
            nome: "Luiz Guilherme",
        }
    ]
    return data[0].nome
    
  
}