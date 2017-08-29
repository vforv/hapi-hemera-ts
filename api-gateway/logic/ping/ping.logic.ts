import * as Hapi from 'hapi';
import { HapiRequest } from '../../sever-types';
export class PingLogic {
    constructor() { }

    getPing(req: any, reply: any) {
        return req.hemera.act({ topic: 'ping', cmd: 'date', format: req.params.format },
            function (err:any, result:any) {

                reply(err || result)
            })
    }
}
