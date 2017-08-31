import * as lab from 'lab';
import * as code from 'code';
import { StartServer } from '../server';
import { HapiServer } from '../sever-types';
import * as sinon from 'sinon';
import { PingLogic } from '../logic/ping/ping.logic';
import { RegisterRoutes } from '../plugins/routes/index';
import * as Hemera from 'nats-hemera';
const Nats = require('hemera-testsuite/natsStub');



const L = exports.lab = lab.script();
const expect = code.expect;

const S = new StartServer;

//FOR UNIT TESTS STUB HEMERA INSTANCE
const nats = new Nats();
const HemeraServer: any = new Hemera(nats, {
    logLevel: 'info'
})
sinon
    .stub(S as any, 'getInstance')
    .returns(HemeraServer);
//FOR UNIT TESTS STUB HEMERA INSTANCE

const server: any = S.server;



const testServer: any = S.connectServer(true);


L.before((done) => {


    done();
});

L.experiment('Server started', () => {

    L.test('Ping route test', (done) => {

        sinon
            .stub(server.hemera, 'act')
            .yields(null, 'mock');


        server.inject('/v1/ping/formated', (response: any) => {

            expect(response.payload).to.equal('mock');
            done();
        });
    });
})

