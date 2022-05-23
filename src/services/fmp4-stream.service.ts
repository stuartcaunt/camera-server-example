import { singleton } from "tsyringe";

@singleton()
export class FMP4StreamService {

    constructor() {
    }

    async getStreams(): Promise<string[]> {
        // Use axios to call the stream server
        return null;
    }

}