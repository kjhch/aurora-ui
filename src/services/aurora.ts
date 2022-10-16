import axios from "axios";

export class AuroraService {
    public async getAuthor(): Promise<string> {
        try {
            let resp = await axios.get("/api/v1/author")
            return resp.data.author
        } catch (error) {
            console.error(error)
        }
        return ""
    }
}

const auroraService = new AuroraService()
export { auroraService }