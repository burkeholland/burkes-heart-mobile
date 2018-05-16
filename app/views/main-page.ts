import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import MainViewModel from '../models/main-view-model';

import {
  AggregateBy,
  HealthData,
  HealthDataType,
  ResponseItem
} from 'nativescript-health-data';

let model = new MainViewModel();

// Event handler for Page "navigatingTo" event attached in main-page.xml
export async function navigatingTo(args: EventData) {
  let page = <Page>args.object;

  page.bindingContext = model;
}
