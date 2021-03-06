
import { getServerConfigs } from './environments';
import * as Hapi from 'hapi';
import { HapiServer } from './sever-types';
import { Modlues } from './modules/index';
import * as Hemera from 'nats-hemera';


export class StartServer {
    public server: HapiServer = new Hapi.Server() as HapiServer;

    constructor() {
        const port = getServerConfigs().port;

        this.server.connection({
            port: port,
            routes: {
                cors: true
            }
        });
    }

    private getInstance(): Hemera {
        const nats = require('nats').connect({
            'url': process.env.NATS_URL,
            'user': process.env.NATS_USER,
            'pass': process.env.NATS_PW
        })


        return new Hemera(nats, { logLevel: 'info' })
    }

    public connectServer(env: boolean): void {
        this.getInstance().ready(() => {
            return this.server.register(Modlues, {
                routes: {
                    prefix: '/v1'
                }
            },
                (err) => {
                    if (err) {
                        throw err
                    }
                    
                    this.server.initialize((err) => {
                        if (err) {
                            throw err;
                        }

                        // Don't continue to start server if module
                        // is being require()'d (likely in a test)
                        if (!env) {
                            // Starting the server


                            this.server.start(() => {
                                let serverUri = this.server.info.uri;

                                console.log(`Server running at:, ${serverUri}`);
                            });


                        }
                    });

                });
        });


    }

}