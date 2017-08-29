// import * as Hemera from 'nats-hemera';
import { PingLogic } from '../logic/ping.logic';

const ping = new PingLogic;

export class PingActions {
    //PUT HEMERA INSTANCE INSTEAD ANY AFTER @types file added
    constructor(private hemera: any) {}

    getPingAction() {
        this.hemera.add({
            topic: 'ping',
            cmd: 'date'
        }, ping.getPing)
    }
}