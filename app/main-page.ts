/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { AggregateBy, HealthData, HealthDataType } from 'nativescript-health-data'

let model = new HelloWorldModel();

declare global {
  interface Date {
    addHours(h): Date;
  }
}


Date.prototype.addHours = function (h): Date {
  this.setTime(this.getTime() + (h * 60 * 60 * 1000));
  return this;
}

class MyHealthyClass {
  private healthData: HealthData;

  constructor() {
    this.healthData = new HealthData();
  }

  authorize() {
    this.healthData.isAuthorized([<HealthDataType>{ name: "heartRate", accessType: "read" }])
      .then(authorized => {
        if (!authorized) {
          const types: Array<HealthDataType> = [
            { name: "heartRate", accessType: "read" }
          ];

          return Promise.all([authorized, this.healthData.requestAuthorization(types)]);
        }
      })
      .then(results => {
        if (results[1] === true) {
          this.query();
        }
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  query() {
    this.healthData.query(
      {
        startDate: new Date(new Date().getTime() - 1 * 24 * 60 * 60 * 1000), // 3 days ago
        endDate: new Date(), // now
        dataType: "heartRate", // equal to the 'name' property of 'HealthDataType'
        unit: "count/min" // make sure this is compatible with the 'dataType' (see below)
      })
      .then(results => {
        results.forEach(result => {

          console.log(`Start: ${result.start.addHours(-6).toUTCString()}, End${result.end.addHours(-6).toUTCString()}`);
          console.log(`Value: ${result.value}, Unit: ${result.unit}`);
        });
      })
      .catch(error => console.log(error));
  }
}

let healthData = new MyHealthyClass();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
  /*
  This gets a reference this page’s <Page> UI component. You can
  view the API reference of the Page to see what’s available at
  https://docs.nativescript.org/api-reference/classes/_ui_page_.page.html
  */
  let page = <Page>args.object;

  /*
  A page’s bindingContext is an object that should be used to perform
  data binding between XML markup and TypeScript code. Properties
  on the bindingContext can be accessed using the {{ }} syntax in XML.
  In this example, the {{ message }} and {{ onTap }} bindings are resolved
  against the object returned by createViewModel().
 
  You can learn more about data binding in NativeScript at
  https://docs.nativescript.org/core-concepts/data-binding.
  */
  page.bindingContext = new HelloWorldModel();

  healthData.authorize();
}