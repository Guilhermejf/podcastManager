import { IncomingMessage } from "http";
import { repoPodcast } from "../repositories/podcast-repository"

export const serviceFilterEpisodes = async (podcastName: string | undefined)=>{
    const queryString = podcastName?.split("?p=")[1] || ""
    const rawData = await repoPodcast(queryString);

    return rawData
}