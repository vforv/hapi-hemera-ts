import * as Hemera from 'nats-hemera';
import { PingLogic } from '../logic/ping.logic';

const ping = new PingLogic;

export class PingActions {
    constructor(private hemera: Hemera) {}

    getPingAction() {
        this.hemera.add({
            topic: 'ping',
            cmd: 'date'
        }, ping.getPing)
    }
}