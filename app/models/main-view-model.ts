import { Observable } from 'data/observable';
import * as http from 'http';

import {
  AggregateBy,
  HealthData,
  HealthDataType,
  ResponseItem
} from 'nativescript-health-data';

export default class MainViewModel extends Observable {
  private healthData: HealthData;

  constructor() {
    super();
    this.healthData = new HealthData();
  }

  async authorize() {
    return this.healthData
      .isAuthorized([<HealthDataType>{ name: 'heartRate', accessType: 'read' }])
      .then(authorized => {
        if (!authorized) {
          const types: Array<HealthDataType> = [
            { name: 'heartRate', accessType: 'read' }
          ];

          return Promise.all([
            authorized,
            this.healthData.requestAuthorization(types)
          ]);
        }
      });
  }

  public async onTap() {
    let authorized = await this.authorize();

    if (authorized) {
      this.healthData
        .startMonitoring({
          dataType: 'heartRate',
          enableBackgroundUpdates: true,
          backgroundUpdateFrequency: 'immediate',
          onUpdate: (completionHandler: () => void) => {
            console.log('app was notified so querying...');
            completionHandler();
          }
        })
        .then(() => console.log('Started monitoring...'))
        .catch(err => console.log(err));
    }
  }
}
