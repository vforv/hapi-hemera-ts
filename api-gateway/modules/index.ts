import { RegisterRoutes } from '../plugins/routes/index';
const Blipp = require('blipp');
const Chairo = require('chairo');
const Swagger = require('hapi-swagger')
const Labbable = require('labbable');

const R = new RegisterRoutes

export const Modlues: any = [
    {
        register: R.register
    },
    {
        register: Blipp
    }, 
    {
        register: require('inert')
    },
    {
        register: require('vision')
    },
    {
        register: require('hapi-hemera'),
        options: {
            hemera: {
                name: 'test',
                // logLevel: process.env.HEMERA_LOG_LEVEL,
                childLogger: true,
                tag: 'hemera-1'
            },
            nats: {
                'url': process.env.NATS_URL,
                'user': process.env.NATS_USER,
                'pass': process.env.NATS_PW
            }
        }
    },
    {
        register: Swagger
    }, {
        register: Labbable.plugin
    },
    {
        register: require('good'),
        options: {
            reporters: {
                console: [{
                    module: 'good-squeeze',
                    name: 'Squeeze',
                    args: [{
                        log: '*',
                        request: '*',
                        response: '*',
                        error: '*'
                    }]
                }, {
                    module: 'good-console'
                }, 'stdout']
            }
        }
    }
]
