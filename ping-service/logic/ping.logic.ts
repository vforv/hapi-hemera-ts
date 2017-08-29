
import * as Moment from 'moment';


export class PingLogic {

  public getPing(msg: any, done: any): any {

    let date: number | string = Date.now();
    if (msg.format == 'formated') {
      date = Moment().format('MMMM Do YYYY, h:mm:ss a');
    } else if (msg.format == 'timestamp') {
      date = Date.now()
    }
    done(null, {
      date: date
    })
  }

}
