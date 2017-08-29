const Hemera = require('nats-hemera');
import { PingActions } from './actions/ping.actions';


const nats = require('nats').connect({
  'url': process.env.NATS_URL,
  'user': process.env.NATS_USER,
  'pass': process.env.NATS_PW
})




const hemera = new Hemera(nats, { logLevel: 'info' })


hemera.ready(() => {

  const ping = new PingActions(hemera)
  ping.getPingAction();
  
})
