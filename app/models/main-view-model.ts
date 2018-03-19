import { Observable } from 'data/observable';
import HealthKit from '../HealthData';
import * as http from 'http';

let healthKit = new HealthKit();
let lastEntry = new Date();
let lastbpm = 0;

export default class MainViewModel extends Observable {

  private _message: string;
  private _lastChecked: Date;
  private _monitoring: boolean;

  constructor() {
    super();
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    if (this._message !== value) {
      this._message = value;
      this.notifyPropertyChange('message', value)
    }
  }

  get lastChecked(): Date {
    return this._lastChecked;
  }

  set lastChecked(value: Date) {
    if (this._lastChecked !== value) {
      this._lastChecked = value;
      this.notifyPropertyChange('lastChecked', value);
    }
  }

  get monitoring(): boolean {
    return this._monitoring;
  }

  set monitoring(value: boolean) {
    if (this._monitoring !== value) {
      this._monitoring = value;
      this.notifyPropertyChange('monitoring', value);
    }
  }

  public async onTap() {
    if (this.monitoring) {
      healthKit.stop();
    }
    else {
      // initialize health kit, request auth and start listening
      let authorized = await healthKit.authorize();

      if (authorized) {
        healthKit.start().then(() => console.log(`Started monitoring`))
          .catch(error => console.log(error));
        //console.log("Our app was notified that health data changed, so querying...");
        // let result = await healthKit.query();

        // this.message = `Heart Rate Is: ${result.value} as of ${result.end.toUTCString()}`;
        // this.lastChecked = new Date();

        // if (lastbpm !== result.value) {
        //   http.getJSON(`https://heart-bulb.azurewebsites.net/api/update?bpm=${result.value}&timeStamp=ok`).then(result => {
        //     console.log(JSON.stringify(result));
        //   }).catch(err => {
        //     console.log(err);
        //   }).then(() => {
        //     completionHandler();
        //   });
        // }
        // else {
        //   completionHandler();
        // }

        // lastbpm = result.value;
        // completionHandler();
      };
    }
    this.monitoring = !this.monitoring;
  }
}
