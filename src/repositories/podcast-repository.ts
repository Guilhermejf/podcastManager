import { isUtf8 } from "buffer"
import fs from "fs"
import path from "path"
import { Podcast } from "../models/podcast-interface"


const pathData = path.join(__dirname,"../repositories/podcast.json")

export const repoPodcast = async (): Promise<Podcast[]> =>{
    const rawData = fs.readFileSync(pathData,"utf-8")

    const jsonFile = JSON.parse(rawData)
    return jsonFile
}