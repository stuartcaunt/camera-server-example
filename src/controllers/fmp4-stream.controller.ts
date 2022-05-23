import {Request, Response} from "express";
import { singleton } from "tsyringe";
import { FMP4StreamService } from "../services";
import { logger,  } from "../utils";

@singleton()
export class FMP4StreamController {

    constructor(private _service: FMP4StreamService) {
    }

    async getStreams(req: Request, res: Response) {
        try {
            const streams = await this._service.getStreams();
            logger.info(`Got list of streams`);
            res.status(200).json(streams);

        } catch (error) {
            if (error instanceof Error) {
                logger.error(`An error occurred getting list of streams: ${error.message}`);
                res.status(500).send(`Server error: ${error.message}`);
            } else {
                logger.error(`An error occurred getting list of streams: ${error}`);
                res.status(500).send(`Server error: ${error}`);

            }
        }
    }


}
