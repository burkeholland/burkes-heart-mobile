import {
  AggregateBy,
  HealthData,
  HealthDataType,
  ResponseItem
} from 'nativescript-health-data';
import * as http from 'http';

let lastbpm = 0;

declare global {
  interface Date {
    addHours(h: number): Date;
  }
}

Date.prototype.addHours = function(h: number): Date {
  this.setTime(this.getTime() + h * 60 * 60 * 1000);
  return this;
};

class HealthKit {
  private healthData: HealthData;

  constructor() {
    this.healthData = new HealthData();
  }

  authorize() {
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

  start() {
    return this.healthData
      .startMonitoring({
        dataType: 'heartRate',
        enableBackgroundUpdates: true,
        backgroundUpdateFrequency: 'immediate',
        onUpdate: (completionHandler: () => void) => {
          console.log('app was notified so querying...');
          completionHandler();
          // this.query().then(results => {
          //   console.log(JSON.stringify(results));
          //   completionHandler();
          // });
        }
      })
      .then(() => console.log('Started monitoring...'))
      .catch(err => console.log(err));
  }

  stop() {
    return this.healthData.stopMonitoring({
      dataType: 'heartRate'
    });
  }

  query() {
    return new Promise<ResponseItem>((resolve, reject) => {
      this.healthData.query({
        startDate: new Date(new Date().getTime() - 3600 * 60 * 1000), // 1 hour ago
        endDate: new Date(), // now
        dataType: 'heartRate', // equal to the 'name' property of 'HealthDataType'
        unit: 'count/min', // make sure this is compatible with the 'dataType' (see below),
        sortOrder: 'desc'
      });
      // .then(results); => {
      //   // let result = results[0];

      //   // result.start.addHours(-5);
      //   // result.end.addHours(-5);

      //   resolve(results);
      // })
      // .catch(error => reject(error));
    });
  }
}

export default HealthKit;
