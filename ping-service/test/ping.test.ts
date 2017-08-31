import * as lab from 'lab';
import * as code from 'code';
import * as sinon from 'sinon';
import * as Moment from 'moment';
import * as Hemera from 'nats-hemera';
import { PingActions } from '../actions/ping.actions';
const Nats = require('hemera-testsuite/natsStub')
const ActStub = require('hemera-testsuite/actStub')
const AddStub = require('hemera-testsuite/addStub')



const L = exports.lab = lab.script();
const expect = code.expect;

//FOR UNIT TESTS STUB HEMERA INSTANCE
const PORT = 4222
const noAuthUrl = 'nats://localhost:' + PORT
let server: any;



L.experiment('Ping action', () => {

    L.test('Ping acction test moment formated time', (done) => {
        const nats = new Nats()
        const hemera = new Hemera(nats, {
            logLevel: 'info'
        })
        const ping = new PingActions(hemera)

        const actStub = new ActStub(hemera);
        hemera.ready(() => {
            //add actions
            ping.getPingAction();

            //run test
            AddStub.run(hemera, { topic: 'ping', cmd: 'date' }, { format: 'formated' }, function (err: any, result: any) {
                expect(err).to.be.not.exists()
                let d = Moment().format('MMMM Do YYYY, h:mm:ss a');

                expect(result.date).to.be.equals(d)
                done()
            })

        });
    });

});
